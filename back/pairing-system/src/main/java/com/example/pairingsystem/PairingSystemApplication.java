package com.example.pairingsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
@SpringBootApplication
public class PairingSystemApplication {

    @Configuration
    public class WebConfig implements WebMvcConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**").allowedOrigins("http://localhost:3000") // 允許訪問的前端地址
                    .allowedMethods("GET", "POST", "PUT", "DELETE") // 允許的HTTP方法
                    .allowCredentials(true); // 允許攜帶cookie等認證信息
        }
    }
    public static void main(String[] args) {
        SpringApplication.run(PairingSystemApplication.class, args);
    }

}
