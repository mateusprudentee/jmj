package com.jmj.task_service.infraestructure.persistence;

import com.jmj.task_service.domain.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaTaskRepository
        extends JpaRepository<Task, Long> {
}