package com.edu.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.control.CommentAddController;
import com.edu.control.CommentGetController;
import com.edu.control.CommentListController;
import com.edu.control.CommentUpdateController;
import com.edu.control.MemberInsertController;
import com.edu.control.MemberListController;

public class FrontController extends HttpServlet { // util import lunch

	// map
	Map<String, Controller> map = null;

	// init
	@Override
	public void init(ServletConfig config) throws ServletException {

		map = new HashMap<String, Controller>(); // hashmap import lunch

		// url패턴, 컨트롤러
		map.put("/memberList.do", new MemberListController());
		map.put("/memberInsert.do", new MemberInsertController());
		
		//댓글 관련
		map.put("/commentAdd.do", new CommentAddController());
		map.put("/commentList.do", new CommentListController());
		map.put("/commentGet.do", new CommentGetController());
		map.put("/commentUpdate.do", new CommentUpdateController());
		
	}

	// service
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String uri = req.getRequestURI(); // uri <- i // edu2/memberList.do 호출하면 요게 uri값
		String context = req.getContextPath(); // edu2
		String path = uri.substring(context.length());

		Controller control = map.get(path);
		control.execute(req,  resp);
//		System.out.println(control);
	}

}
