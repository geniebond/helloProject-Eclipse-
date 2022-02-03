package co.micol.jsptest.common;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class DataSource { // DAO 객체 / mybatis + singletone 
	
	//single tone class 생성
	private static SqlSessionFactory sqlSessionFactory;
	private DataSource() {} // 외부에서 생성하지 못하도록 나를 생성자로 다시 만듬
	
	public static SqlSessionFactory dataSource() { //외부 접근용
		String resource = "mybatis-config.xml";
		InputStream inputStream;
		try {
			inputStream = Resources.getResourceAsStream(resource);
			sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		} catch (IOException e) {
			e.printStackTrace();
		}
	
		return sqlSessionFactory;
		
	}
	

}
