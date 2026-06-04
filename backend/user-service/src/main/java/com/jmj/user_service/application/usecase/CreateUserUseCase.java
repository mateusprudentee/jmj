package com.jmj.user_service.application.usecase;

import com.jmj.user_service.domain.entity.User;
import com.jmj.user_service.domain.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class CreateUserUseCase {

    private final UserRepository repository;

    public CreateUserUseCase(UserRepository repository) {
        this.repository = repository;
    }

    public User execute(User user) {
        return repository.save(user);
    }
}