
package com.edu.full;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.edu.common.DAO;

public class FullDAO extends DAO {
// DAO자료를 여기 FullDAO로 상속받기

//	2022.01.12 fullcalendar를 위한 서블릿 수업

	// com.deu.full.FullAO
	// title, startDate, endDate -> VO, Map : key, value ->
	
	//일정을 삭제하는 메소드. 
	
	public boolean deleteSchedule(Map<String, String> map) throws SQLException {
		System.out.println(map.get("title"));
		String sql = "DELETE FROM full_calendar WHERE title=?";
		connect();
		
		psmt = conn.prepareStatement(sql);
		psmt.setString(1, map.get("title"));
		//psmt.setString(2, map.get("startDate"));
		//psmt.setString(3, map.get("endData"));
		
		int r = psmt.executeUpdate();
		if(r > 0) {
			return true;
		} else {
			return false;
		}
	}
	
	//일정을 등록하는 메소드. -----------------------------------------------
	public boolean insertSchedule(Map<String, String> map) throws SQLException {
		System.out.println(map.get("title"));
		String sql = "INSERT INTO full_calendar values(?, ?, ?)";
		connect();
		psmt = conn.prepareStatement(sql); //insertschedule 메소드 쪽으로 예외 던지기
		psmt.setString(1, map.get("title")); //map의 key값을 넣음 -> 디벨로퍼 타이틀
		psmt.setString(2, map.get("startDate"));
		psmt.setString(3, map.get("endDate"));
		
		int r = psmt.executeUpdate();
		if (r > 0) {
			return true;
		} else {
			return false;
		}
		
	}
	

	// 전체 일정을 가지고 오는 메소드. -----------------------------------------------
	public List<Map<String, String>> getSchedules() { // List, Map - import lunch
		String sql = "select * from full_calendar";
		connect();

		// 반환타입 : List<Map<String, String>>
		// [{title: "test", start:"2020-01-01", end:"2020-01-02"}, ]
		List<Map<String, String>> scheduleList = new ArrayList<Map<String, String>>();

		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				Map<String, String> map = new HashMap<String, String>(); // HashMap - import lunch
				map.put("title", rs.getString("title")); // db의 title value 가져오기
				map.put("start", rs.getString("start_date"));
				map.put("end", rs.getString("end_date"));

				scheduleList.add(map); // 스케줄리스트에 루핑된 값들을 담는다?
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return scheduleList;
	}
}
