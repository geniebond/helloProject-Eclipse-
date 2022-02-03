package co.micol.prj.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.micol.prj.comm.Command;

public class MainCommand implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 단순히 페이지만 돌리기 -> 리턴값에 주소 설정
		
		return "main/main"; // 처음에 시작하는 페이지를 돌려줍니다. 
	}

}
