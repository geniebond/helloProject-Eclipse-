<%@page import="com.edu.model.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>첫페이지(index.jsp)</title>
</head>
<body>
	<%
		MemberVO login = (MemberVO) session.getAttribute("login");
	if(login == null) {
		request.getRequestDispatcher("login/login.jsp").forward(request, response);
	} else {
			
	%>
	<h2>l <%=login.getName() %> 님 환영합니다~! <button id="logout">로그아웃</button></h2>
	<h3>글 등록 관련</h3>
	<a href='./comment/commentAddForm.jsp'>글 등록 페이지</a><br>
	<a href='./commentListController.do'>글목록 컨트롤</a><br>
	<a href='./comment/commentList.jsp'>글목록</a><br>

	<h3>회원등록 관련</h3>
	<a href='memberView/memberInsert.jsp'>회원등록 페이지</a><br>
	<a href='memberView/memberSearch.jsp'>회원정보 검색</a><br>
	<a href='memberView/memberDelete.jsp'>회원정보 삭제</a><br>
	<a href='memberView/memberUpdate.jsp'>회원정보 수정</a><br>
	
	<h4>전체 리스트 출력</h4>
	<a href='memberList.do'>회원정보 전체 리스트 출력</a>

	<%
	
	}
	%>

	<script>
		document.getElementByID('logout').addEventListener('click', logoutFnc);
		
		
		 function logoutFnc() {
			<%
				session.invalidate();
			%>
			location.href = 'index.jsp';
			
		} 
	</script>		
	
</body>
</html>


