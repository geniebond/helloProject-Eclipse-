<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberLoginForm</title>
</head>
<body>
	<div align="center">
		<jsp:include page="../main/header.jsp" />
		<div>
			<br>
			<h1>로그인</h1>
		</div>
		<div>
			<form id="frm" action="login.do" method="post">
				<div>
					<table border="1">
						<tr>
							<th width="150">아이디</th>
							<td width="200"><input type="text" id="id" name="name" required="required"></td>
						</tr>
						<tr>
							<th width="150">비밀번호</th>
							<td width="200"><input type="password" id="password" name="password" required="required"></td>
						</tr>
					</table>
				</div>
				<br>
				<div>
					<input type="submit" value="로그인">&nbsp; 
					<input type="reset" value="취 소">&nbsp;
				</div>
			</form>
		</div>
	</div>
</body>
</html>