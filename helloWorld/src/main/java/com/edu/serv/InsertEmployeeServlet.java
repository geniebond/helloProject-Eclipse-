package com.edu.serv;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.emp.EmpDAO;
import com.edu.emp.EmployeeVO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


@WebServlet("/InsertEmployeeServlet")
public class InsertEmployeeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public InsertEmployeeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		
				
				
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		//요청 정보에 한글이 포함되어있다면 -> 밑에와 같이 한글 출력처리를 해줘야한다. 
		
		// 응답정보에 charset 지정.
		// 출력페이지에 contect-type : json 저장
		request.setCharacterEncoding("utf-8");
		
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		//response.setContentType("text/json;charset=utf-8");
		
		String eid = request.getParameter("employee_id");
		String fn = request.getParameter("first_name");
		String ln = request.getParameter("last_name");
		String hd = request.getParameter("hire_date");
		String em = request.getParameter("email");
		String sa = request.getParameter("salary");
		
		// empList.html 페이지 Ajax(현재페이지) 호출.
		// 사용자가 입력한 값들을 받고
		EmployeeVO vo = new EmployeeVO();
		vo.setEmployeeId(Integer.parseInt(eid));
		vo.setFirstName(fn);
		vo.setLastName(ln);
		vo.setHireDate(hd);
		vo.setEmail(em);
		vo.setJobId("IT_PROG");
		vo.setSalary(Integer.parseInt(sa));
		
		
		EmpDAO dao = new EmpDAO();
		dao.insertEmployee(vo);
		
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(vo));
	}

}
