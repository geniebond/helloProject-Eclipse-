package co.micol.jsptest.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Command {

	public String run(HttpServletRequest request, HttpServletResponse response);
	
	//request =  요청객체 : 말 그래도 넘어온 요청들은 담아놓음     //response = 응답해주는 객체는 : 응답하는객체 
	// 서버가 자동으로 만들어지고 -> 필요시 섹션도 만들어짐(session) 그래서 세션을 이용할때 요 session 객체를 이용 
	//세션은 -< 요청 응답시 누구인지? 를 모르기때문에 세션을 이용(이전 기록을 보관)? 한다고함 // 이전에 들어온 친구네? 하고 연결하고 끊고 
	
}
