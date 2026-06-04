package com.jmj.user_service.application.usecase;

import com.jmj.user_service.domain.entity.User;
import com.jmj.user_service.domain.repository.UserRepository;
import com.jmj.user_service.infraestructure.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginUseCase {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public LoginUseCase(
            UserRepository repository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public String execute(String email, String password) {

        User user = repository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Usuário não encontrado"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Senha inválida");
        }

        return jwtService.generateToken(email);
    }
}