<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>header.jsp</title>
<link rel="stylesheet" href="css/menu.css">
</head>
<body>
	<div align="center">
		<div>
			<br />
		</div>
		<div>
			<!-- 메뉴부분 jstl에선 c:if에서 else 구문이 없습니다. 고로 c:if를 2번 사용 -->
			<ul>
				<li><a class="active" href="main.do">Home</a></li>
				<c:if test="${empty id }">
				<li><a href="loginForm.do">Login</a></li>				
				</c:if>
				<c:if test="${not empty id }">
				<li><a href="logout.do">LogOut</a></li>
				</c:if>
				
				<li><a href="#">Contact</a></li>
				
				<li><a href="#">About</a></li>
				
				<li><a href="#">Product</a></li>
				
				<li><a href="#">Service</a></li>
				
				<li><a href="#">Members</a></li>
				
			</ul>
		</div>
	</div>
</body>
</html>