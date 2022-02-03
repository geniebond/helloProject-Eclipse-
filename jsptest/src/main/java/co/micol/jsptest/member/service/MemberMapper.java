package co.micol.jsptest.member.service;

import java.util.List;

public interface MemberMapper { // mybatis 에서 사용하기 위해 만든 맴퍼 인터페이스 

List<MemberVO> memberSelectList(); // 전체리스트 가져오기 - R
	
	MemberVO memberSelect(MemberVO vo); // 한명 조회 - R
	
	int memberInsert(MemberVO vo); // 삽입 기능 - C
	
	int memberDelete(MemberVO vo); // 삭제 기능 - D
	
	int memberUpdate(MemberVO vo); // 변경 기능 - U
	
}
