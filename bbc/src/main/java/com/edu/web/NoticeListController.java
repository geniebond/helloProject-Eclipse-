package com.edu.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.common.HttpUtil;
import com.edu.service.NoticeService;
import com.edu.serviceImpl.NoticeDAO;
import com.edu.vo.NoticeVO;

public class NoticeListController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 공지사항 전체를 조회화고 -> 그 결과를 notice/noticeList.jsp로 연결해줘야 한다?

		String path = "notice/noticeList.tiles";
		NoticeService service = new NoticeDAO();
		
		List<NoticeVO> list = service.selectList();
		
		//NoticeList.do 요청정보를 -> NoticeList.jsp 페이지로 전달?
		//forward딩을 NoticeList로 넘겨줄것?
		
		req.setAttribute("noticeList", list);
		HttpUtil.forward(req, resp, path);
		
	}

}
