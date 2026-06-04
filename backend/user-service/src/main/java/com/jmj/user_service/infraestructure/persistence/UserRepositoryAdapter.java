package com.jmj.user_service.infraestructure.persistence;

import com.jmj.user_service.domain.entity.User;
import com.jmj.user_service.domain.repository.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRepositoryAdapter implements UserRepository {

    private final JpaUserRepository repository;

    public UserRepositoryAdapter(JpaUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public User save(User user) {
        return repository.save(user);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }
}