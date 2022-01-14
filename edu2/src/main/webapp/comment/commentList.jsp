<%@page import="java.util.List"%>
<%@page import="com.edu.model.CommentVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>comment/commentList.jsp</title>
</head>
<body>

	<%
		CommentVO vo = (CommentVO)request.getAttribute("comment");
		// ctrl + space? 오류남 
		if(vo != null) {
		out.println("<h3>등록 아이디 : " + vo.getId() + "</h3>");
		out.println("<h3>등록 이름 : " + vo.getName() + "</h3>");
		out.println("<h3>등록 내용 : " + vo.getContent() + "</h3>");
			}
		
		List<CommentVO> list = (List<CommentVO>)request.getAttribute("commentList");
		
		if(list != null) {
			
		out.print("<table border='1'>"); // start table
		out.print("<thead><th>아이디</th><th>이름</th><th>내용</th></thead>"); // thead + th
		out.print("<tbody>"); //start tbody
		for (CommentVO comment : list) {
			out.print("<tr><td><a href='commentGet.do?id=" + comment.getId() + "'>" 
								 + comment.getId() + "</td><td>" 
		                         + comment.getName() + "</td><td>" 
					             + comment.getContent() + "</td></tr>");
		}
		
		out.print("</tbody>"); //end /tbody
		out.print("</table>"); //end /table
		
		} else {
			out.print("<h3>글내용 없음</h3>");
		}
		
		
		
	%>

</body>
</html>