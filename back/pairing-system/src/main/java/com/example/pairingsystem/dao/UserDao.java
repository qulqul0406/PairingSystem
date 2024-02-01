package com.example.pairingsystem.dao;

import com.example.pairingsystem.dto.UserRegisterRequest;
import com.example.pairingsystem.model.User;

public interface UserDao {
    Integer createUser(UserRegisterRequest userRegisterRequest);

    User getUserById(Integer userId);

    User getUserByEmail(String email);
}
