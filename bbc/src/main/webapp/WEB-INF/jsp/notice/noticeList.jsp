<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>

<script>
	function formSubmit(id) {
		document.forms.frm.id.value = id;
		document.forms.frm.submit();
		
	}
</script>

<form id="frm" name="frm" action="${pageContext.request.contextPath }/noticeSelect.do" method="post">
	<input type="hidden" name="id">
</form>


<body>


	<table class=table border="1">
		<thead>
			<tr>
				<th>공지사항 번호</th>
				<th>공지사항 제목</th>
				<th>공지사항 작성자</th>
				<th>공지사항 작성일시</th>
				<th>공지사항 조회수</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="notice" items="${noticeList }">
				<tr onclick="formSubmit(${notice.ntcId })">
					<td>${notice.ntcId }</td>
					<td>${notice.ntcTitle }</td>
					<td>${notice.ntcContent }</td>
					<td>${notice.ntcWdate }</td>
					<td>${notice.ntcHit }</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>

</body>
</html>

<a href="${pageContext.request.contextPath }/noticeForm.do">공지사항 등록</a>