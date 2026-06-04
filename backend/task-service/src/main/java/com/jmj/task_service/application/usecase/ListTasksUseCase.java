package com.jmj.task_service.application.usecase;

import com.jmj.task_service.domain.entity.Task;
import com.jmj.task_service.domain.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListTasksUseCase {

    private final TaskRepository repository;

    public ListTasksUseCase(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> execute() {
        return repository.findAll();
    }
}