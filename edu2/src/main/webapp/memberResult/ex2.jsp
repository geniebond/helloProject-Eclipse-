<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ex2.jsp</title>
</head>
<body>

	<%
	for (int i = 1; i <= 10; i += 2) {
		System.out.println(i);
	}

	String[] hobbies = { "독서", "헬스", "음주", "폭주" };
	for(String hobby : hobbies) {
		System.out.println(hobby);
	}
	request.setAttribute("hobbies", hobbies);
	%>

	<ul>
		<c:forEach begin="1" end="10" var="num" step="2">
			<li>${num }</li> //해당문장은 위 for문과 동일한 jtl 방식

		</c:forEach>
	</ul>

	<ol>
		<c:forEach var="hobby" items="${hobbies }"> //배열에 있는 갯수 만큼 가져오기
			<li>${hobby }</li> // items에 값을 지정하고 -> 배열 가져오기
		</c:forEach>
	</ol>
	
	<table border="1">
		<c:forEach var="i" begin="1" end="9">
			<tr>
				<c:forEach var="j" begin="2" end="9">
					<td>${j } * ${i } = ${j*i }</td>
				</c:forEach>
			</tr>
		</c:forEach>
	</table>
	
</body>
</html>