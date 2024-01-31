package com.example.pairingsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.Date;

@Data
public class User {
    private Integer userId;
    private String username;
    private String email;
    @JsonIgnore
    private String password;
    private String salt;
    private String company;
    private String department;
    private String height;
    private Integer pairing;
    private Date createdDate;
    private Date lastModifiedDate;
}
