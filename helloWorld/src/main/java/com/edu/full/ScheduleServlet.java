package com.edu.full;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/ScheduleServlet")
public class ScheduleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ScheduleServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// doGet()메소드 -> 조회할 때 사용함.
		response.setContentType("text/json;charset=utf-8");
		FullDAO dao = new FullDAO();
		List<Map<String, String>> schedules = dao.getSchedules();

		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(schedules));
		// response -> 출력스트림을 출력? get writter -> 웹브라우저에 출력.

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// doPost()메소드 -> 스케줄(한/n)? 건 입력할때 사용함.
		request.setCharacterEncoding("utf-8"); // 한글 처리
		response.setContentType("text/json;charset=utf-8");

		//// doPost() - 삭제 메소드

		String action = request.getParameter("action");
		if (action.equals("delete")) {
			
			String title = request.getParameter("title");
			System.out.println(title);

			Map<String, String> map = new HashMap<String, String>();
			map.put("title", title);

			FullDAO dao = new FullDAO();
			String result = "";
			try {
				if (dao.deleteSchedule(map)) {
					result = "{\"delCode\" : \"Success\"}";
				} else {
					result = "{\"delCode\" : \"Fail\"}";
				}
			} catch (SQLException e) {
				result = "{\"delCode\" : \"Fail\"}";
			}
			response.getWriter().print(result); // 해당 getwirter가 없으면 값이 송신되지 않습니다. 
			// 여기까지 삭제입력처리 ---------

			// 하단 else if부터 입력처리 
		} else if (action.equals("insert")) {

			String title = request.getParameter("title");
			System.out.println(title);
			String start = request.getParameter("start");
			String end = request.getParameter("end");

			Map<String, String> map = new HashMap<String, String>(); // HashMap import lunch
			// 2가지의 방법이 있습니다. 파라미터값을 1나씩 또는 map값으로(요즘 유행한다고 하심?)
//		dao.insertSchedule(title, start, end); // 위 3가지으 parameter 매개변수값 받고. 
			map.put("title", title);
			map.put("startDate", start);
			map.put("endDate", end);

			FullDAO dao = new FullDAO();
			String result = "";
			try {
				if (dao.insertSchedule(map)) {
					// {"retCode" : "Success"}
					result = "{\"retCode\" : \"Success\"}";
				} else {
					result = "{\"retCode\" : \"Fail\"}";
				}
			} catch (SQLException e) {
				e.printStackTrace();
				result = "{\"retCode\" : \"Fail\"}";
			}
			// 웹 브라우저로 -> json 형태의 값을 송신함.
			response.getWriter().print(result);
			// 여기까지 입력처리
		}

	} // end of dopost.

}
