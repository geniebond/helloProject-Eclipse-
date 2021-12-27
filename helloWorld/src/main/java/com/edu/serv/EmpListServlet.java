package com.edu.serv;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.emp.EmpDAO;
import com.edu.emp.EmployeeVO;

@WebServlet("/EmpListServlet")
public class EmpListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	// 이번에는 레지스터 말고 다른 서블릿을 해봅니다.
	// 요걸 실행시키면 EmpListServelet을 실행하게 됩니다.

	public EmpListServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		EmpDAO dao = new EmpDAO();
		List<EmployeeVO> list = dao.getEmpList();
		
		//사원테이블을 출력하고 -> for문과 링크를 걸어 사원번호를 누를씨 정보 출력 해보기
		out.println("<table border ='1'>");
		out.println("<caption>사원리스트</caption>");
		out.println("<thead>");
		out.println("<tr>"
				+ "<th>사원번호</th>"
				+ "<th>이름</th>"
				+ "<th>이메일</th>"
				+ "<th>입사일자</th>"
				+ "<th>직무</th>"
				+ "<th>급여</th>"
				+ "</tr>");
		out.println("</thead>");
		out.println("<tbody>");
		for (EmployeeVO emp : list) {
			out.println("<tr>");
			out.println("<td><a href='html/GetEmplServlet?id=" + emp.getEmployeeId() + "'>" + emp.getEmployeeId() + "</a></td>");
			out.println("<td>" + emp.getLastName() + " " + emp.getFirstName() + "</td>");
			out.println("<td>" + emp.getEmail() + "</td>");
			out.println("<td>" + emp.getHireDate() + "</td>");
			out.println("<td>" + emp.getJobId() + "</td>");
			out.println("<td>" + emp.getSalary() + "</td>");
			out.println("</tr>");
		}
		out.println("</tbody>");
		out.println("</table>");

		
		/*
		// print 라이터는 -> 출력 또는 스트림을 읽어온다던가 를 한다?
		// out.println("<h2>hhhhhh</h2>"); //이 out은 웹브라우저에 hhhh를 출력합니다.
		// out.println("<a href='https://www.daum.net'>it's Daum site</a>");
		// System.out.println("hhhhhh"); //요건 이클립스의 console에 출력

		// response.getWriter().append("Served at: ").append(request.getContextPath());
		*/
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// doGet(request, response);
	}

}
