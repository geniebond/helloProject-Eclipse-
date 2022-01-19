package com.edu.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.web.BulletinAddController;
import com.edu.web.BulletinDeleteController;
import com.edu.web.BulletinFormController;
import com.edu.web.BulletinListController;
import com.edu.web.BulletinSelectController;
import com.edu.web.BulletinUpdateController;
import com.edu.web.MainController;
import com.edu.web.NoticeAddController;
import com.edu.web.NoticeDeleteController;
import com.edu.web.NoticeFormController;
import com.edu.web.NoticeListController;
import com.edu.web.NoticeSelectController;
import com.edu.web.NoticeUpdateController;


public class FrontController extends HttpServlet { // util import lunch

	// map
	Map<String, Controller> map = null;

	// init
	@Override
	public void init(ServletConfig config) throws ServletException {
		map = new HashMap<String, Controller>(); 

		// url패턴, 컨트롤러
		map.put("/main.do", new MainController());
		
		// 게시판 관련 Controller 생성
		map.put("/bulletinList.do", new BulletinListController());
		map.put("/bulletinForm.do", new BulletinFormController());
		map.put("/bulletinAdd.do", new BulletinAddController());
		map.put("/bulletinSelect.do", new BulletinSelectController());
		map.put("/bulletinUpdate.do", new BulletinUpdateController());
		map.put("/bulletinDelete.do", new BulletinDeleteController());
		
		// 공지사항 컨트롤
		map.put("/noticeList.do", new NoticeListController());
		map.put("/noticeForm.do", new NoticeFormController());
		map.put("/noticeAdd.do", new NoticeAddController());
		map.put("/noticeSelect.do", new NoticeSelectController());
		map.put("/noticeUpdate.do", new NoticeUpdateController());
		map.put("/noticeDelete.do", new NoticeDeleteController());
	}

	// service
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		req.setCharacterEncoding("utf-8"); // 한글 변환
		resp.setCharacterEncoding("utf-8");

		String uri = req.getRequestURI(); // uri <- i // edu2/memberList.do 호출하면 요게 uri값
		String context = req.getContextPath(); // edu2
		String path = uri.substring(context.length());

		Controller control = map.get(path);
		control.execute(req, resp);
		System.out.println(control);
	}

}
