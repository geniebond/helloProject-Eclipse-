<%@page import="com.edu.model.CommentVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<c:set var="id" value="kildong"></c:set>
	<c:out value="${id }"></c:out>
	
	<c:remove var="name "/>
	<c:out value=" ${name }"></c:out>
	
	<%
	 CommentVO comment = new CommentVO();
		comment.setId(10); //id
		comment.setName("홍길동"); //name
		comment.setContent("샘플"); //conect field를 지정하고 있음
		request.setAttribute("vo", comment); 
		//밑에 c:set 값을 읽어올때는 set / 그리고 보낼때는 out
		
		// <c: if 사이에는 -> 조건을 넣으면 됩니다. 
	%>
	
	<c:set var="id" value="${vo.id }" ></c:set>  
	<c:out value="${id }"></c:out>
	
	<c:set var="name" value="${vo.name }"></c:set>
	<c:out value="${name }"></c:out>
	
	<c:set var="sname">Hong</c:set>
	<p><c:out value="${sname }"></c:out></p>
	
	<c:set var="num" value="${80 }"></c:set>
	<p>점수 : <c:out value="${num }"></c:out></p>
	<c:if test="${num > 60 }">
		<p>합격</p>
	</c:if>
	
	<c:choose>
		<c:when test="${num > 90 }">A Grade</c:when>
		<c:when test="${num > 80 }">B Grade</c:when>
		<c:when test="${num > 70 }">C Grade</c:when>
		<c:otherwise>D Grade</c:otherwise>
	</c:choose>

</body>
</html>