package com.edu.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.service.BulletinService;
import com.edu.serviceImpl.BulletinDAO;
import com.edu.vo.BulletinVO;

public class BulletinUpdateController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 입력값을 읽어오고 update 메소드를 호출 -> 결과는 : 리스트페이지로 이동.
		
		String id = req.getParameter("id");
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		
		BulletinVO vo = new BulletinVO();
		vo.setBbsId(Integer.parseInt(id));
		vo.setBbsTitle(title);
		vo.setBbsContent(content);
		
		BulletinService service = new BulletinDAO();
		service.update(vo);
		
		resp.sendRedirect("bulletinList.do");
		
		
	}

}