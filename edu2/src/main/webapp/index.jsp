<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>첫페이지(index.jsp)</title>
</head>
<body>
 <a href='./member/memberList.jsp'>회원리스트</a><br>
 <a href='./memberList.do?id=user1&pw=1234'>멤버리스트.do</a><br>
 <a href='./memberInsert.do'>멤버등록.do</a><br>
 
 <a href='./comment/commentAddForm.jsp'>글 등록 페이지</a><br>
 <a href='./commentListController.do'>글목록 컨트롤</a><br>
 <a href='./comment/commentList.jsp'>글목록</a><br>
</body>
</html>