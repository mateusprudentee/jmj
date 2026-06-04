package com.jmj.task_service.presentation.controller;

import com.jmj.task_service.application.usecase.CreateTaskUseCase;
import com.jmj.task_service.application.usecase.ListTasksUseCase;
import com.jmj.task_service.domain.entity.Task;
import com.jmj.task_service.presentation.dto.CreateTaskRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final CreateTaskUseCase createTaskUseCase;
    private final ListTasksUseCase listTasksUseCase;

    public TaskController(
            CreateTaskUseCase createTaskUseCase,
            ListTasksUseCase listTasksUseCase
    ) {
        this.createTaskUseCase = createTaskUseCase;
        this.listTasksUseCase = listTasksUseCase;
    }

    @PostMapping
    public Task create(
            @RequestBody CreateTaskRequest request
    ) {

        Task task = Task.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .userId(request.getUserId())
                .build();

        return createTaskUseCase.execute(task);
    }

    @GetMapping
    public List<Task> list() {
        return listTasksUseCase.execute();
    }
}