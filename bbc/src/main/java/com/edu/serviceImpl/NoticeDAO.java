package com.edu.serviceImpl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.edu.common.DAO;
import com.edu.service.NoticeService;
import com.edu.vo.NoticeVO;

public class NoticeDAO extends DAO implements NoticeService {

		// 전체 리스트 --------------------
	@Override
	public List<NoticeVO> selectList() {
		connect();
		String sql = "SELECT * FROM notice ORDER BY 1";
		List<NoticeVO> list = new ArrayList<>();
		
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				NoticeVO notice = new NoticeVO();
				notice.setNtcId(rs.getInt("notice_id"));
				notice.setNtcTitle(rs.getString("notice_title"));
				notice.setNtcContent(rs.getString("notice_content"));
				notice.setNtcWdate(rs.getString("notice_wdate"));
				notice.setNtcHit(rs.getInt("notice_hit"));
				list.add(notice);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
	
		// 단건 선택 + 조회수 증가 --------------------
	@Override
	public NoticeVO selectOne(int ntcId) {
		connect();
		String sql = "SELECT * FROM notice WHERE notice_id=?";
		NoticeVO notice = null;
		
		try {
			conn.prepareStatement(sql);
			psmt.setInt(1, ntcId);
			
			rs = psmt.executeQuery();
			if(rs.next()) {
				notice = new NoticeVO();
				
				notice.setNtcId(rs.getInt("notice_id"));
				notice.setNtcTitle(rs.getString("notice_title"));
				notice.setNtcContent(rs.getString("notice_content"));
				notice.setNtcWdate(rs.getString("notice_wdate"));
				notice.setNtcHit(rs.getInt("notice_hit"));
				
				// 조회수 카운트 증가
				updateCount(ntcId);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return notice;
	}
	
	//조회수 증가 --------------------
	public void updateCount(int id) {
		connect();
		String sql = "UPDATE notice SET notice_hit = notice_hit+1 WHERE notice_id=?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, id);
			int r = psmt.executeUpdate();
			System.out.println(r + " 건 조회(hit)되었습니다.");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}

		// 입력 & 삽입 --------------------
	@Override
	public NoticeVO insert(NoticeVO vo) {
		connect();
		
		String sql1 = "SELECT notice_id_seq.nextval FROM DUAL";
		String sql2 = "INSERT INTO notice(notice_id, notice_title, notice_content, notice_wdate, notice_hit) "
				+ "VALUES(?,?,?,sysdate,0)";
		
		try {
			psmt = conn.prepareStatement(sql1);
			rs = psmt.executeQuery();
			int seq = 0;
			
			if(rs.next()) {
				seq = rs.getInt(1);
			}
			psmt = conn.prepareStatement(sql2);
			psmt.setInt(1, seq);
			psmt.setString(2, vo.getNtcTitle());
			psmt.setString(3, vo.getNtcContent());
			int r = psmt.executeUpdate();
			System.out.println(r + " 건이 입력(insert)되었습니다.");
			
			//  입력값에 ntcId값만 추가해서 반환?
			vo.setNtcId(seq);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			disconnect();
		}		
		return vo;
	}

		// 수정&업데이트 --------------------
	@Override
	public NoticeVO update(NoticeVO vo) {
		connect();
		String sql ="UPDATE notice SET notice_title=?, notice_content=? WHERE notice_id=?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getNtcTitle());
			psmt.setString(2, vo.getNtcContent());
			psmt.setInt(3, vo.getNtcId());
			int r = psmt.executeUpdate();
			System.out.println(r + " 건 변경(update)되었습니다.");
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return vo;
	}

		// 삭제 --------------------
	@Override
	public int delete(int ntcId) {
		connect();
		String sql = "DELETE FROM notice WHERE notice_id=?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, ntcId);
			int r = psmt.executeUpdate();
			System.out.println(r + " 건 삭제(delete)되었습니다.");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return ntcId;
	}

	
	
}
