package com.jmj.user_service.domain.repository;

import com.jmj.user_service.domain.entity.User;

import java.util.Optional;

public interface UserRepository {

    User save(User user);

    Optional<User> findByEmail(String email);

    Optional<User> findById(Long id);
}