package co.micol.prj.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.micol.prj.comm.Command;

public class Logout implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 
		
		HttpSession session = request.getSession();
		String name = (String) session.getAttribute("name"); // String type casting 
		String author = (String) session.getAttribute("author");
		String id = (String) session.getAttribute("id");
		System.out.println(name);
		System.out.println(author);
		System.out.println(id);
		
		request.setAttribute("message", name + " 님 로그아웃 되었습니다.");
		session.invalidate(); // inval 데이터는 는 세션을 아예 삭제시켜버립니다. 

		return "member/memberLogout";
	}

}
