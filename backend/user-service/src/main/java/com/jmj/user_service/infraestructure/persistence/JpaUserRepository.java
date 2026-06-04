package com.jmj.user_service.infraestructure.persistence;

import com.jmj.user_service.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JpaUserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}