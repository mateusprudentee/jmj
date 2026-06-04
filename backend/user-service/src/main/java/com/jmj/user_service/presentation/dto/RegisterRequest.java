package com.jmj.user_service.presentation.dto;

import lombok.Data;

@Data
public class RegisterRequest {

    private String name;
    private String email;
    private String password;
}