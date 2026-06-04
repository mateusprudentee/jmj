package com.jmj.user_service.presentation.dto;

import lombok.Data;

@Data
public class LoginRequest {

    private String email;
    private String password;
}