package com.edu.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.common.HttpUtil;
import com.edu.service.BulletinService;
import com.edu.serviceImpl.BulletinDAO;
import com.edu.vo.BulletinVO;

public class BulletinListController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// 전체리스트를 조회하고 -> 그 결과를 bulletin/bulleinList.jsp로 연결해줘야 합니다. 
		
		String path = "bulletin/bulletinList.tiles";
		BulletinService service = new BulletinDAO();
		
		List<BulletinVO> list = service.selectList();
		
		//bulletinList.do 요청정보를 bulletinList.jsp 페이지로 전달. 
		//forward딩을 하는데 -> bulletinlist로 넘겨주고 시퍼어요?
		
		req.setAttribute("bulletinList", list);
		
		HttpUtil.forward(req, resp, path);
		
		
		
		
	}

}
