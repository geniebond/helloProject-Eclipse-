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

//12.27 서블릿 만들기 수업 http의 서블릿을 상속받아서
//밑에와 같은 기능을 구현합니다. (만든게 아니라 만들어져있는걸 servelet으로 가져옴)


@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public RegisterServlet() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		// 한글로 처리하는 구문들
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=UTF-8");
		
		//이미 만들어진 서블릿이지만  -> 규칙에 따라 바꾸고해서 사용을 해야합니다. 
		String fn = request.getParameter("first_name");
		String ln = request.getParameter("last_name");
		String em = request.getParameter("email");
		String ji = request.getParameter("job_id");
		String hd = request.getParameter("hire_date");
		String sa =  request.getParameter("salary");
		//위 값들을 받아온 이유는 밑에 insert갚에 던져 넣고 싶어서?
		
		EmpDAO dao = new EmpDAO();
		//인서트
		EmployeeVO vo = new EmployeeVO();
		
		vo.setEmail(em);
		vo.setFirstName(fn);
		vo.setHireDate(hd);
		vo.setJobId(ji);
		vo.setLastName(ln);
		vo.setSalary(Integer.parseInt(sa));
		
		//dao.insertEmp(vo);
		response.getWriter().print("<h2>처리완료</h2>");
		
		//전체 출력
		//List<EmployeeVO> list = dao.getEmpList();
		//for(EmployeeVO emp : list) {
			//response.getWriter().print(emp); }
		
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	//getContextPath -> 실행경로를 뜻함  예시 served at = //helloworld 

	protected void doPost(HttpServletRequest request, 
			HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
