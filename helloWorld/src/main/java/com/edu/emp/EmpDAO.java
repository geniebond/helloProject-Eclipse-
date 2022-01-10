package com.edu.emp;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.edu.common.DAO;

public class EmpDAO extends DAO {
	
	/* 3번으로 작성 <-> employee vo -> dao -> empdao 순서로 가고있음
	 * 클래스 만들고 난 뒤에 위에 extends DAO로 상속을 받는다. 
	 */
	
	
	//deleteEmployeeServlet용 삭제
	
	public boolean deleteEmployee(String empId) throws SQLException {
		String sql = "DELETE FROM emp_temp WHERE employee_id=?";
		connect();
		psmt = conn.prepareStatement(sql);
		psmt.setString(1, empId);
		
		int r = psmt.executeUpdate();
		if(r>0) {
			return true;
		} else {
			return false;
		}
	}
	
	
	//삭제 delete
	
//	public void deleteEmp(int employeeId) {
//		
//		String sql = "DELETE FROM emp_temp WHERE employee_id = ?";
//		connect();
//	
//		try {
//			psmt = conn.prepareStatement(sql);
//			psmt.setInt(1, employeeId);
//			//psmt.setInt(1, vo.getEmployeeId());
//			
//			int r = psmt.executeUpdate();
//			System.out.println(r + "건이 삭제 되었습니다.");
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//		} finally {
//			disconnect();
//		}
//		
//	}
	
	
	//수정update
	public void updateEmp(EmployeeVO vo) {
		String sql = "UPDATE emp_temp SET salary=?, job_id=?, email=? WHERE employee_id=?";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, vo.getSalary());
			psmt.setString(2, vo.getJobId());
			psmt.setString(3, vo.getEmail());
			psmt.setInt(4, vo.getEmployeeId());
			
			int r = psmt.executeUpdate();
			System.out.println(r + "건이 변경 되었습니다.");
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		
		
	}
	
	//한건 입력 - javascript용 xml로 새로 하나 만듬 2022-01-10
	public void insertEmployee(EmployeeVO vo) {
		String sql = "INSERT INTO emp_temp("
				+ "employee_id, "
				+ "first_name, "
				+ "last_name, "
				+ "hire_date, "
				+ "email, "
				+ "job_id, "
				+ "salary)"
				+ "values(?, ?, ?, ?, ?, ?, ?)"; // parameter - 7pcs	
			connect();
			try { //예외처리
				psmt = conn.prepareStatement(sql);
				psmt.setInt(1, vo.getEmployeeId());
				psmt.setString(2, vo.getFirstName());
				psmt.setString(3, vo.getLastName());
				psmt.setString(4, vo.getHireDate());
				psmt.setString(5, vo.getEmail());
				psmt.setString(6, "IT_PROG");
				psmt.setInt(7, vo.getSalary());
				int r = psmt.executeUpdate();
				System.out.println(r + "건 업데이트 되었습니다.");
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
			disconnect();
	}
	
	//한건 입력
//	public void insertEmp(EmployeeVO vo) {
//		String sql ="INSERT INTO emp_temp(employee_id, first_name, last_name, email, hire_date, job_id, salary) "
//				+ "values(employees_seq.nextval, ?,?,?,?,?,?)";
//		
//		connect();
//		
//		try {
//			psmt = conn.prepareStatement(sql);
//			psmt.setString(1, vo.getFirstName());
//			psmt.setString(2, vo.getLastName());
//			psmt.setString(3, vo.getEmail());
//			psmt.setString(4, vo.getHireDate());
//			psmt.setString(5, vo.getJobId());
//			psmt.setInt(6, vo.getSalary());
//			
//			int r = psmt.executeUpdate();
//			System.out.println(r + "건이 입력되었습니다.");
//			
//		} catch (SQLException e) {
//			e.printStackTrace();
//		} finally {
//			disconnect();
//		}
//		
//	}
	
	//전체 리스트.
	public List<EmployeeVO> getEmpList(){
		String sql = "SELECT * FROM emp_temp ORDER BY 1";
		List<EmployeeVO> empList = new ArrayList<EmployeeVO>();
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				
                EmployeeVO emp = new EmployeeVO();
				
				emp.setEmployeeId(rs.getInt("employee_id"));
				emp.setFirstName(rs.getString("first_name"));
				emp.setLastName(rs.getString("last_name"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date").substring(0, 10));
				emp.setJobId(rs.getString("job_id"));
				emp.setSalary(rs.getInt("salary"));
				
				empList.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		
		return empList;
	}

	//한건(단건 조회)
	public EmployeeVO getEmployee(int eid) {
		//여기 안에 쿼리 문 실행
		String sql = "SELECT * FROM emp_temp WHERE employee_id=?";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, eid);
			rs = psmt.executeQuery();
			
			if(rs.next()) {
				EmployeeVO emp = new EmployeeVO();
				
				emp.setEmployeeId(rs.getInt("employee_id"));
				emp.setFirstName(rs.getString("first_name"));
				emp.setLastName(rs.getString("last_name"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date"));
				emp.setJobId(rs.getString("job_id"));
				emp.setSalary(rs.getInt("salary"));
				return emp;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			
		}
		
		return null;
	}

		
}
