<%@page import="com.edu.model.CommentVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>commentDetail.jsp</title>
</head>
<body>

	<%
		CommentVO vo = (CommentVO)request.getAttribute("comment");
	
	%>
	
	<table>
		<tr>
			<th>아이디</th>
			<td><%=vo.getId()%></td>
		</tr>
		<tr>
			<th>이름</th>
			<td><%=vo.getName()%></td>
		</tr>
		<tr>
			<th>내용</th>
			<td><%=vo.getContent()%></td>
		</tr>
	</table>
	
	<div>
		<button id="updateBtn">수 정</button>
		<button id="deleteBtn">삭 제</button>
		
	</div>
	
	<script>
	
		//수정, 수정화면으로 이동 -> 값을 변경. -> 수정.do/controller -> commentList.jsp
		document.getElementById('updateBtn').addEventListener('click', updateCommentForm);
		function updateCommentForm() {
			var firstTd = document.querySelector('table > tbody > tr > td:nth-of-type(1)');
			var id = document.querySelector('table > tr > td:nth-of-type(1)').innerText;
			var id = firstTd.innerText;
			window.location.href = 'comment/commentUpdateForm.jsp?id=?' + id; 
		}
		
		//삭제. -> 삭제처리.do -> commentList.jsp 
		document.getElementById('deleteBtn').addEventListener('click', deleteComment);
		function deleteComment() {
			//window.location.href = 'comment/deleteCommentForm.jsp';
		}
	</script>
	
</body>
</html>