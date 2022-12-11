package com.example.disaster_decoding;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.disaster_decoding.Mapper")
public class DisasterDecodingApplication {

	public static void main(String[] args) {
		SpringApplication.run(DisasterDecodingApplication.class, args);
	}

}
