<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>


<!-- 기존template에서 쓰던것들 여기로 복사해놓음 -->

	<div class="head">
		<tiles:insertAttribute name="head"></tiles:insertAttribute>
	</div>

	<div class="menu">
		<tiles:insertAttribute name="menu"></tiles:insertAttribute>
	</div>

	<div class="body">
		<tiles:insertAttribute name="body"></tiles:insertAttribute>
	</div>

	<div class="foot">
		<tiles:insertAttribute name="foot"></tiles:insertAttribute>
	</div>

</body>
</html>