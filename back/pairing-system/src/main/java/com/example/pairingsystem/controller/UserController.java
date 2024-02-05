package com.example.pairingsystem.controller;

import com.example.pairingsystem.dto.UserLoginRequest;
import com.example.pairingsystem.dto.UserRegisterRequest;
import com.example.pairingsystem.dto.UserUpdateRequest;
import com.example.pairingsystem.model.User;
import com.example.pairingsystem.service.UserService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class UserController {

    @Autowired
    private UserService userService;

    //註冊
    @PostMapping("/users/register")
    public ResponseEntity<User> register(@RequestBody @Valid UserRegisterRequest userRegisterRequest){
        Integer userId = userService.register(userRegisterRequest);

        User user = userService.getUserById(userId);

        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    //登入
    @PostMapping("/users/login")
    public ResponseEntity<User> login(@RequestBody @Valid UserLoginRequest userLoginRequest){
        User user = userService.login(userLoginRequest);

        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    //個人資料密碼更新
    @PutMapping("/users/{userId}")
    public ResponseEntity<User> updateUser(@PathVariable Integer userId,
            @RequestBody @Valid UserUpdateRequest userUpdateRequest){
        User user = userService.getUserById(userId);

        if (user == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        userService.updateUser(userId, userUpdateRequest);

        User updateUser = userService.getUserById(userId);

        return ResponseEntity.status(HttpStatus.OK).body(updateUser);
    }


    //是否配對


}
