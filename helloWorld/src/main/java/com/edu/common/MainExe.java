package com.edu.common;

import java.util.List;

import com.edu.emp.EmpDAO;
import com.edu.emp.EmployeeVO;

public class MainExe {

	
	
	public static void main(String[] args) {
	
		EmpDAO dao = new EmpDAO();
		// main 메소드
		
		
		//입력 값을 first name, last name, emp, hire, jobid, salary 
		EmployeeVO vo = new EmployeeVO();
		//vo.setEmployeeId(209);
		//vo.setFirstName("민수");
		//vo.setLastName("김");
		//vo.setEmail("ms1@email.com");
		//vo.setHireDate("2021-05-01");
		//vo.setJobId("SA_MAN");
		//vo.setSalary(6000);
		
		//입력
		//dao.insertEmp(vo);
		
		//업데이트
		//dao.updateEmp(vo);
		
		//삭제
//		dao.deleteEmp(209);
		
		
		
		
		// 단건조회
		//EmployeeVO emp = dao.getEmployee(100);
		
		
		// 전체 조회
		List<EmployeeVO> empList = dao.getEmpList();
		
		for(EmployeeVO emp : empList) {
			System.out.println(emp);
		}
		
		//System.out.println(emp);
		
	}
}
