package com.jmj.user_service.presentation.controller;

import com.jmj.user_service.application.usecase.CreateUserUseCase;
import com.jmj.user_service.application.usecase.LoginUseCase;
import com.jmj.user_service.domain.entity.User;
import com.jmj.user_service.presentation.dto.LoginRequest;
import com.jmj.user_service.presentation.dto.LoginResponse;
import com.jmj.user_service.presentation.dto.RegisterRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final CreateUserUseCase createUserUseCase;
    private final LoginUseCase loginUseCase;

    public AuthController(
            CreateUserUseCase createUserUseCase,
            LoginUseCase loginUseCase
    ) {
        this.createUserUseCase = createUserUseCase;
        this.loginUseCase = loginUseCase;
    }

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();

        return createUserUseCase.execute(user);
    }

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request
    ) {

        String token = loginUseCase.execute(
                request.getEmail(),
                request.getPassword()
        );

        return new LoginResponse(token);
    }
}