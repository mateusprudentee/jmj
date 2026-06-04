package com.jmj.task_service.domain.repository;

import com.jmj.task_service.domain.entity.Task;

import java.util.List;

public interface TaskRepository {

    Task save(Task task);

    List<Task> findAll();
}