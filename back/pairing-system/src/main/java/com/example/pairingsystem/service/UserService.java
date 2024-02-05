package com.example.pairingsystem.service;

import com.example.pairingsystem.dto.UserLoginRequest;
import com.example.pairingsystem.dto.UserRegisterRequest;
import com.example.pairingsystem.dto.UserUpdateRequest;
import com.example.pairingsystem.model.User;

public interface UserService {
    Integer register(UserRegisterRequest userRegisterRequest);

    User getUserById(Integer userId);

    User login(UserLoginRequest userLoginRequest);

    void updateUser(Integer userId,UserUpdateRequest userUpdateRequest);

}
