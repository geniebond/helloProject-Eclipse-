package com.edu.serv;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.emp.EmpDAO;
import com.edu.emp.EmployeeVO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class EmpList
 */

@WebServlet("/EmpList.json")
public class EmpList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public EmpList() {
        super();
    }
    

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		response.setContentType("text/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		
		// {"employeeID":10, "firstName" : "kildong", "lastName":"Hong", "email":"mail", "hireDate":"date", "jobId":"id", "salary":"salary"}, {}, {},....}
		EmpDAO dao = new EmpDAO();
		List<EmployeeVO> list = dao.getEmpList();
		
		//밑은 gsonjar 방식으로 만든 방식입니다. 
		Gson gson = new GsonBuilder().create();
		String jsonData = gson.toJson(list).toString();
		
		
		//아래는 gson.jar가 없을때 만들어본 방식입니다. 
//		StringBuilder sb = new StringBuilder();
//		sb.append("["); //위 [] 예시를 만드려면 여는 곳 그리고 폴문 밖에 ]닫는곳이 있어야 한다. 
//		int totalCnt = list.size(); // 10건이면 9건까지는 " , " 가 들어가고 마지막은 (, ) 없음
//		
//		for(int i = 0; i < list.size(); i ++) {
//			sb.append("{\"employeeID\":"+list.get(i).getEmployeeId() // 키 벨류들
//					+", \"firstName\" : \""+list.get(i).getFirstName() //
//					+", \"lastName\":\""+list.get(i).getLastName() //
//					+", \"email\":\""+list.get(i).getEmail() //
//					+", \"hireDate\":\""+list.get(i).getHireDate() //
//					+", \"jobId\":\""+list.get(i).getJobId() //
//					+", \"salary\":\""+list.get(i).getSalary()+"\"}");
//			
//			//마지막 데이터는 ( , )를 생략합니다. 
//			if(i != totalCnt -1) {
//				sb.append(",");
//			}
//		}
//		sb.append("]");
		// 화면으로 출력 = tostring으로 자료값을 -> 문자열로 변환 출력 
//		response.getWriter().println(json.toString());
		response.getWriter().println(jsonData);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
	}

}
