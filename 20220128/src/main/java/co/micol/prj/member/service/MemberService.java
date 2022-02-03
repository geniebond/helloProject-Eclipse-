package co.micol.prj.member.service;

import java.util.List;

import co.micol.prj.member.vo.MemberVO;

public interface MemberService {
	
	//기본적인 crud를 만듭니다. 
	
	List<MemberVO> memberSelectList(); // 
	
	MemberVO memberSelect(MemberVO vo); //
	
	int memberInsert(MemberVO vo); //
	
	int memberUpdate(MemberVO vo); //
	
	int memberDelete(MemberVO vo); //
	
	boolean isIdCheck(String id); // 로그인시 아이디 중복 체크 
	
	

}
