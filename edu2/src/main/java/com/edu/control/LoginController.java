package com.edu.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.edu.common.Controller;
import com.edu.dao.MemberDAO;
import com.edu.model.MemberVO;

public class LoginController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub

		String id = req.getParameter("id");
		String pw = req.getParameter("passwd");
		
		MemberDAO dao = new MemberDAO();
		MemberVO member = dao.loginCheck(id, pw);
		
		req.setAttribute("sid",  id);
		req.setAttribute("member", member);
		
				
		if(member != null) {
			HttpSession session = req.getSession(); // 세션정보. 클라이언트 별로 생성.
			session.setAttribute("login", member);
		}
		
		// index.jsp로 이동
		req.getRequestDispatcher("index.jsp").forward(req, resp);
		
		
	}

}
