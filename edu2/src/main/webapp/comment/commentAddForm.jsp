<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>comment/commentAddForm.jsp</title>
</head>
<body>

	<h3>글 등록 페이지</h3>
		<div id="commentAdd">
		<form action ="../commentAdd.do" method="get" name="addForm">
			이름 : <input type="text" name="name" size="10"><br>
			내용 : <textarea name="content" cols="20" rows="2"></textarea><br>
			<input type="submit" value="등록"> 
			</form>
		</div>

</body>
</html>