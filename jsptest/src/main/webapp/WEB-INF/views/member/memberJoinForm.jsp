<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 화면 폼</title>
</head>
<body>

	<div align="center">
		<div>
			<h1>회원가입</h1>
		</div>
		<div>
			<form id="frm" action="memberJoin.do" method="post">
				<div>
					<table border="1">
						<tr>
							<th width="100">아 이 디</th>
							<td width="150"><input type="text" id="id" name="id"></td>
						</tr>
						<tr>
							<th width="100">패스워드</th>
							<td width="150"><input type="password" id="password" name="password"></td>
						</tr>
						<tr>
							<th width="100">이 름</th>
							<td width="150"><input type="text" id="name" name="name"></td>
						</tr>
						<tr>
							<th width="100">전화번호</th>
							<td width="150"><input type="text" id="tel" name="tel"></td>
						</tr>
						<tr>
							<th width="100">주 소</th>
							<td width="150"><input type="text" id="address" name="address"></td>
						</tr>
					</table>
				</div><br>
					<div>
						<input type="submit" value="회원가입 요청">&nbsp;&nbsp;&nbsp;
						<input type="reset" value="가입취소">&nbsp;&nbsp;&nbsp;
					</div>
			</form>
		</div>
	</div>

</body>
</html>