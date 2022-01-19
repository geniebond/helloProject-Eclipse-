package com.edu.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.edu.common.DAO;
import com.edu.model.CommentVO;
import com.edu.model.MemberVO;

public class MemberDAO extends DAO {

	
	// 로그인체크
	public MemberVO loginCheck(String id, String pw) {
		connect();
		String sql = "SELECT * FROM members WHERE id=? and passwd=?" ;
		MemberVO member = null;
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			rs = psmt.executeQuery();
			if(rs.next()) {
				member = new MemberVO();
				member.setId(rs.getString("id"));
				member.setPasswd(rs.getString("passwd"));
				member.setName(rs.getString("name"));
				member.setMail(rs.getString("mail"));
				
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return member;
	}
	
	
	
	
	// 리스트.
	public List<MemberVO> getMemberList() {
		connect();
		String sql = "SELECT * FROM members order by 1";
		List<MemberVO> memberList = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				MemberVO member = new MemberVO();
				member.setId(rs.getString("id"));
				member.setPasswd(rs.getString("passWd"));
				member.setName(rs.getString("name"));
				member.setMail(rs.getString("mail"));
				memberList.add(member);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return memberList;
	}
	
//	public List<CommentVO> selectAll() {


	// 단건조회.
	public MemberVO getMember(String id) {
		connect();
		String sql = "SELECT * FROM members WHERE id=?";
		MemberVO searchMember = null;
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			rs = psmt.executeQuery();
			if (rs.next()) {
				searchMember = new MemberVO();
				searchMember.setId(rs.getString("id"));
				searchMember.setPasswd(rs.getString("passwd"));
				searchMember.setName(rs.getString("name"));
				searchMember.setMail(rs.getString("mail"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return searchMember;
	}

	// 입력

	public void insertMember(MemberVO vo) {
		connect();
		String sql = "INSERT INTO MEMBERS (id, passwd, name, mail) values (?,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getId());
			psmt.setString(2, vo.getPasswd());
			psmt.setString(3, vo.getName());
			psmt.setString(4, vo.getMail());

			int r = psmt.executeUpdate();
			System.out.println(r + " 건 입력되었습니다.");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}

	}

	// 수정
	public void updateMember(MemberVO vo) {
		connect();
		String sql = "UPDATE members SET passwd=?, name=?, mail=? WHERE id=?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getPasswd());
			psmt.setString(2, vo.getName());
			psmt.setString(3, vo.getMail());
			psmt.setString(4, vo.getId());
			int r = psmt.executeUpdate();
			System.out.println(r + " 건 수정 되었습니다..");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		

	}

	// 삭제.
	public void deleteMember(String id) {
		connect();
		String sql = "DELETE FROM members WHERE id=?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			int r = psmt.executeUpdate();
			System.out.println(r + " 건 삭제 되었습니다..");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}

	}

}
