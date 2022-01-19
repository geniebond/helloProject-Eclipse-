package com.edu.service;

import java.util.List;

import com.edu.vo.BulletinVO;

public interface BulletinService {

		//기능의 정의만 선언. 
	
	// 전체 선택
	public List<BulletinVO> selectList();

	// 한건 선택
	public BulletinVO selectOne(int bbsId);

	// 입력
	public BulletinVO insert(BulletinVO vo);

	// 수정 & 업데이트
	public BulletinVO update(BulletinVO vo);

	// 삭제
	public int delete(int bbsId);

}
