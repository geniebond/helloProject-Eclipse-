package co.micol.jsptest;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.micol.jsptest.command.ACommand;
import co.micol.jsptest.command.BCommand;
import co.micol.jsptest.command.MemberJoin;
import co.micol.jsptest.command.MemberJoinForm;
import co.micol.jsptest.command.MemberList;
import co.micol.jsptest.command.MemberLogin;
import co.micol.jsptest.command.MemberLoginForm;
import co.micol.jsptest.command.MemberSearch;
import co.micol.jsptest.common.Command;

@WebServlet("*.do")
public class FrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	//내부적 사용을 위한 프라이빗 해시맵
	private HashMap<String, Command> map = new HashMap<String, Command>(); //k-key , v-value의 값들이 한쌍 
       
    public FrontController() {
        super();
    }
    	
	public void init(ServletConfig config) throws ServletException {
		// 초기값들을 등록 하는곳 
		
		map.put("/a.do", new ACommand()); // a.do로 요청 
		map.put("/b.do", new BCommand()); // b.do로 요
		map.put("/memberList.do", new MemberList()); // memberList.do로 요청
		map.put("/memberSearch.do", new MemberSearch()); // memberSearch.do요청 / 멤버조회 
		map.put("/memberLoginForm.do", new MemberLoginForm()); //memberLogin.do요청 / 로그인 
		map.put("/memberLogin.do", new MemberLogin()); // member / memberLoginfrom / action 
		map.put("/memberJoinForm.do", new MemberJoinForm()); // memberJoin.do요청 / 회원가
		map.put("/memberJoin.do", new MemberJoin()); // member / memberJoingForm - action
	}

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 실제 요청을 처리하는곳 
		
		// 개념 정리 
		//http : naver / serarch / a. jsp 요런 주소 전체를 URL 이라 칭합니다. 
		// 그리고 naver.com은 -> 도메인을 지칭합니다. 
		// 그 다음에 도메인을 제외한 나머지 / search/a.jsp 를 URI라 칭합니다. / 프로젝트명 
		// 위의 search 는 contextPath라고 하고 그 외에 a.jsp 블라블라는 실제 서버에 요청하는 것입니다. 
		
		request.setCharacterEncoding("utf-8"); // 한글 꺠짐 방지를 위해 설정
		String uri = request.getRequestURI(); // URI 값을 구합니다. 
		String contextPath = request.getContextPath(); // 루트를 구함 (컨텍스트 패스) 실행되는 루트 
		String page = uri.substring(contextPath.length()); //실제 요청하는 페이지  = /a.do or /a.jsp를 가져오는것 
		
		Command command = map.get(page); // 요청을 map에서 찾아옵니다. //가져올땐 GET + 키값을 말함 //위으 map.put.a.do가 여기로옴 
		String viewPage = command.run(request, response); //요청을 처리하는 Command 호출 //스트링으로 들어오니 스트링으로받아줘야합니다. 
		
		//viewResolve 만들기 -> view리저브란 -> WEB-INF/views/a.jsp 이런 모양을 뜻
		if(viewPage != null && !viewPage.endsWith(".do")) {  // 서버에서 접근하기 위한 viewResolve .
			viewPage = "WEB-INF/views/" + viewPage + ".jsp"; //
		}
		
		// 위 리졸브를 만들었다면 돌려줘야 할 곳이 필요합닏.
		
		RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage); // 서버에서 접근하여 브라우저로 결과를 돌립니다. 
		dispatcher.forward(request, response);
		//권한을 부여하는것을 샌드 리다이렉트  또는 디스팩쳐 / 포워드 입니다. 
		//차이가 있다면 디스팩쳐는 -> 값(객체)을 함께 전달하고 / 나머지 2개는 전달만함?
		
		//src/webapp 폴더 밑의 있는 B.jsp등 파일등은 바로 접근이 가능하지만
		// webapp/밑의 views에 넣어놓은 파일등은 보안상의 이유로 접근하기 어렵고 ->요런 보안상의 이유로 Views에 따로 jsp파일들을 보관합니다. 
	}

}
