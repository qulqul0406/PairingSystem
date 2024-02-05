package com.example.pairingsystem.dao.impl;

import com.example.pairingsystem.dao.UserDao;
import com.example.pairingsystem.dto.UserRegisterRequest;
import com.example.pairingsystem.dto.UserUpdateRequest;
import com.example.pairingsystem.model.User;
import com.example.pairingsystem.rowmapper.UserRowMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class UserDaoImpl implements UserDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public User getUserById(Integer userId) {
        String sql = "SELECT user_id, username, email, password, company, department, height, pairing, created_date, last_modified_date " +
                "FROM member WHERE user_id = :userId";

        Map<String,Object> map = new HashMap<>();
        map.put("userId", userId);

        try {
            return (User)namedParameterJdbcTemplate.queryForObject(sql, map, new UserRowMapper());
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }
    @Override
    public User getUserByEmail(String email) {
        String sql = "SELECT user_id, username, email, `password`, company, department, height, pairing, created_date, last_modified_date " +
                "FROM member WHERE email = :email";
        
        Map<String,Object> map = new HashMap<>();
        map.put("email", email);

        try {
            return (User)namedParameterJdbcTemplate.queryForObject(sql, map, new UserRowMapper());
        } catch (EmptyResultDataAccessException e) {
            return null;
        }

    }

    @Override
    public void updatePassword(Integer userId, String newPassword) {
        String sql = "UPDATE member SET password = :password, last_modified_date = :lastModifiedDate WHERE user_id = :userId";

        Map<String,Object> map = new HashMap<>();
        map.put("userId", userId);
        map.put("password", newPassword);
        map.put("lastModifiedDate", new Date());

        namedParameterJdbcTemplate.update(sql,map);
    }


    @Override
    public Integer createUser(UserRegisterRequest userRegisterRequest) {
        String sql = "INSERT INTO member(username, email, password, pairing, created_date, last_modified_date) " +
                "VALUES (:username, :email, :password, :pairing, :createdDate, :lastModifiedDate)";

        Map<String, Object> map = new HashMap<>();
        map.put("username", userRegisterRequest.getUsername());
        map.put("email", userRegisterRequest.getEmail());
        map.put("password", userRegisterRequest.getPassword());
        map.put("pairing", 0);

        Date now = new Date();
        map.put("createdDate", now);
        map.put("lastModifiedDate", now);

        KeyHolder keyHolder = new GeneratedKeyHolder();

        namedParameterJdbcTemplate.update(sql,new MapSqlParameterSource(map),keyHolder);

        int userId = keyHolder.getKey().intValue();

        return userId;
    }


}
