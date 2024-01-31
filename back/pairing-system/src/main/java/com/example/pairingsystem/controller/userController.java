package com.example.pairingsystem.controller;

import com.example.pairingsystem.dto.UserLoginRequest;
//import com.example.pairingsystem.dto.UserRegisterRequest;
import com.example.pairingsystem.model.User;
import com.example.pairingsystem.service.UserService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class userController {

    @Autowired
    private UserService userService;

    //註冊


    //登入
    @PostMapping("/users/login")
    public ResponseEntity<User> login(@RequestBody @Valid UserLoginRequest userLoginRequest){
        User user = userService.login(userLoginRequest);

        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    //個人資料更新


    //是否配對


}
