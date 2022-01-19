package com.edu.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DAO {

	// db 연결을 해서 쓰려고 하면 필요함

	// 연결 필드
	public Connection conn;
	public PreparedStatement psmt;
	public ResultSet rs;

	// JDBC 드라이버 로딩
	public void connect() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		// DBMS 접속
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String id = "hr";
		String password = "hr";

		try {
			conn = DriverManager.getConnection(url, id, password);
			System.out.println("<연결에 성공하였습니다.>");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	//
	public void disconnect() {
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if (psmt != null) {
			try {
				psmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

}
