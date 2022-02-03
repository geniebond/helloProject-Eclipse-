package co.micol.prj.notice.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.micol.prj.notice.vo.NoticeVO;

public interface NoticeMapper {
	
List<NoticeVO> noticeSelectList();
	
	NoticeVO noticeSelect(NoticeVO vo);
	
	int noticeInsert(NoticeVO vo);
	
	int noticeDelete(NoticeVO vo);
	
	int noticeUpdate(NoticeVO vo);
	
	void noticeHitUpdate(int id); //조회수 증가 
	
	List<NoticeVO> noticeSearch(@Param("key") String key, @Param("str") String str); // 검색할 필드 와 데이터를 전달받음
									//넘어오는 값의 타입과 변수가 2개 이상일떄 -> @param 업옵테이션? 을 사용해야 합니다.  
									// 자바는 상관없고 해당 mapper 클래스에선 필요합니다. 
}
