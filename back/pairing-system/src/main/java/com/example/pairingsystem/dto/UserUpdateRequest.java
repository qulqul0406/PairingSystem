package com.example.pairingsystem.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.Date;

@Data
public class UserUpdateRequest {
    private Integer userId;
    private String username;
    @NotBlank
    private String newPassword;
    private  String password;
//    private String salt;
//    private String company;
//    private String department;
//    private String height;
//    private Integer pairing;
//    private Date createdDate;
//    private Date lastModifiedDate;

}
