package com.edu.service;

import java.util.List;

import com.edu.vo.NoticeVO;

public interface NoticeService {

	//공지사항
	//기능의 정의만 선언. 
	
	// 전체 선택
	public List<NoticeVO> selectList();

	// 한건 선택
	public NoticeVO selectOne(int ntcId);

	// 입력
	public NoticeVO insert(NoticeVO vo);

	// 수정 & 업데이트
	public NoticeVO update(NoticeVO vo);

	// 삭제
	public int delete(int ntcId);
}
