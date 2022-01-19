<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


	<h3>공지사항 등록</h3>
	<form action="${pageContext.request.contextPath }/noticeAdd.do"
		method="post">
		<table class="table" border="1">
			<tbody>
				<tr>
					<th>제목</th>
					<th><input class="form=control" type="text" name="title"></th>
				</tr>
				<tr>
					<th>작성자</th>
					<th><input class="form=control" type="text" name="manager"></th>
				</tr>

				<tr>
					<th>내용</th>
					<th><textarea class="form=control" name="content" cols="60"
							rows="10"></textarea></th>
				</tr>
				<tr>
					<td colspan="2" >
					<input type="submit"> 
					<input type="reset">
					</td>
				</tr>
			</tbody>
		</table>
	</form>
</body>
</html>
