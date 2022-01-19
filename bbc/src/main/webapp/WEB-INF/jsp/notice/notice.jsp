<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>

	${notice }

<script>

	function deleteFnc(id) {
		document.forms.delfrm.id.value=id;
		document.forms.delfrm.submit();
	}
</script>

<form action="delFrm" action="${pageContext.request.contextPath }/noticeDelete.do" method="post">
	<input type="hidden" name="id">
</form>

<form action="${pageContext.request.contextPath }/noticeUpdate.do" method="post" >
	<input type="hidden" name="id" value="${notice.ntcId }">
</form>

<body>


	<table class="table" border="1">

		<tbody>
			<tr>
				<th>공지사항 번호</th>
				<td>${notice.ntcId }</td>
			</tr>
			<tr>
				<th>공지사항 제목</th>
				<td><input class="form=control" type="text" name="title"
					value="${notice.ntcTitle }"></td>
			</tr>
			<tr>
				<th>공지사항 내용</th>
			<td><textarea class="form=control" name="content" cols="60" rows="6">${notice.ntcContent }</textarea></td>
			</tr>
			<tr>
				<th>공지사항 작성일시</th>
				<td>${notice.ntcWdate }</td>
			</tr>
			<tr>
				<th>공지사항 조회수</th>
				<td>${notice.ntcHit }</td>
			</tr>
				<td colspan="2">
					<input type="submit" value="공지사항 수정">
					<input type="reset" value="초기화">
					<input type="button" value="공지사항 삭제" onclick="deleteFnc(${notice.ntcId })"> 
				</td>
		</tbody>
	</table>
</body>
</html>