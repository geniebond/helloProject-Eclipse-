package co.micol.prj.member.vo;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter 
public class MemberVO {
	
	//db 자료 가져오기 + lombok의 세터, 게터를 위와 같이 가져옵니다. 
	
	private String id;
	private String password;
	private String name;
	private String tel;
	private String address;
	private String author;
	
	// lombok은 게터 세터 정의안해도 폴더 하위 폴더에 자동생성이 됩니다. 

}
