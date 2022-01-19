package com.edu.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.dao.MemberDAO;
import com.edu.model.MemberVO;

public class MemberListController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//이전 자료
//		String id = req.getParameter("id");
//		String pw = req.getParameter("pw");
//		
//		req.setAttribute("id", id);
//		req.setAttribute("pw", pw);
//	
//	resp.sendRedirect("./member/memberList.jsp");
//	req.getRequestDispatcher("member/memberList.jsp").forward(req, resp);
		
		/// 전체조회 수정 밑에 내용들
		MemberDAO dao = new MemberDAO();
		List<MemberVO> list = dao.getMemberList();
		
		req.setAttribute("memberList", list); //속성 추가.
		req.getRequestDispatcher("memberResult/memberListOutput.jsp").forward(req, resp);
		
		
	}

}
