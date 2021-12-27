package com.edu.serv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.emp.EmpDAO;
import com.edu.emp.EmployeeVO;

@WebServlet({ "/html/GetEmplServlet", "/html/empServlet" })

//위 에 주소가 2개 있는데 두개의 서블릿중 2개중에 아무거나 하나 선택해도 된다는 뜻입니다. 

public class GetEmplServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public GetEmplServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		String eid = request.getParameter("id");
		
		
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		EmpDAO dao = new EmpDAO();
		EmployeeVO vo = dao.getEmployee(Integer.parseInt(eid));
		
		out.println("<h2>"+vo.getFirstName() + " " + vo.getLastName() + "</h2>");
		out.println("<p> 이메일 : " + vo.getEmail() + "</p>");
		out.println("<p> 입사일자 : " + vo.getHireDate() + "</p>");
		out.println("<p> 직무 : " + vo.getJobId() + "</p>");
		out.println("<p> 급여 : " + vo.getSalary() + "</p>");
		
		
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		//doGet(request, response);
	}

}
