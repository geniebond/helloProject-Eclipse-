package com.edu.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.dao.CommentDAO;
import com.edu.model.CommentVO;

public class CommentUpdateController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String name = req.getParameter("name");
		String content = req.getParameter("content");
		
		CommentVO vo = new CommentVO(Integer.parseInt(id), name, content);
		
		CommentDAO dao = new CommentDAO();
		dao.updateComment(vo);
		
		
		// 전체리스트 -> commentList 페이지로 전달 -
		List<CommentVO> list = dao.selectAll();
		req.setAttribute("commentList", list);
		
		RequestDispatcher rs = req.getRequestDispatcher("comment/commentList.jsp"); //매개값으로 이동할 페이지를 지정하는 메소드  
		rs.forward(req, resp);
		
		
		
	}

}
