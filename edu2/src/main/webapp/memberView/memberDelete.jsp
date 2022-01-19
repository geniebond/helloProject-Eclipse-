<%@page import="com.edu.model.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberDelete.jsp</title>
</head>
<body>

	<%
	MemberVO vo = (MemberVO) request.getAttribute("member");
	%>


	<h3>회원정보검색</h3>
	<form action='${pageContext.request.contextPath }/memberSearch.do' method='post'>
		아이디 : <input type='text' name='id'><br> 
		<input type='hidden' name='job' value='delete'> 
		<input type='submit' value='조회'>
	</form>

	<c:choose>
		<c:when test="member != null">
			<p>회원정보 삭제</p>
			<p>조회결과</p>
			<p>아이디 : '${member.id }', 이름 : '${member.name }'</p>
			<form action='${pageContext.request.contextPath }/memberDelete.do' method='post'>
				<input type='hidden' name='id' value='${member.id }'> 
				<input type='submit' value='삭제'>
			</form>

			<c:otherwise>
			out.println("<p>조회된 결과가 없습니다.</p>");
			</c:otherwise>
		</c:when>
	</c:choose>


	

</body>
</html>