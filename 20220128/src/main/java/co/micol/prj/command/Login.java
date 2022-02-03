package co.micol.prj.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.micol.prj.comm.Command;
import co.micol.prj.member.service.MemberService;
import co.micol.prj.member.serviceImpl.MemberServiceImpl;
import co.micol.prj.member.vo.MemberVO;

public class Login implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		
		MemberService memberDao = new MemberServiceImpl();
		MemberVO vo = new MemberVO();
		
		HttpSession session = request.getSession(); // 세션객체를 가져옵니다. 
		
		vo.setId(request.getParameter("id"));
		vo.setPassword(request.getParameter("password"));
		
		vo = memberDao.memberSelect(vo);
		if(vo != null) { //if 사이의 것들이 세션에 값을 담는 것들입니다. // 값을 담아야 다음에 로그인이 계속 유지가 됩니다. 
			session.setAttribute("id", vo.getId()); // id 저장    
			session.setAttribute("author", vo.getAuthor()); // 권한을 저장
			session.setAttribute("name", vo.getName()); // 이름을 저장
			request.setAttribute("message", vo.getName() + " 환영합니다.");
		} else {
			request.setAttribute("message", "아이디 또는 패스워드가 일치하지 않습니다.");
		}
		return "member/memberLoginResult";
	}

}
