package com.jmj.task_service.application.usecase;

import com.jmj.task_service.domain.entity.Task;
import com.jmj.task_service.domain.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class CreateTaskUseCase {

    private final TaskRepository repository;

    public CreateTaskUseCase(TaskRepository repository) {
        this.repository = repository;
    }

    public Task execute(Task task) {
        return repository.save(task);
    }
}