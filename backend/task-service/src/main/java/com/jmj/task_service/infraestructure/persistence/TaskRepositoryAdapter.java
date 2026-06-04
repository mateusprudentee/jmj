package com.jmj.task_service.infraestructure.persistence;

import com.jmj.task_service.domain.entity.Task;
import com.jmj.task_service.domain.repository.TaskRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TaskRepositoryAdapter
        implements TaskRepository {

    private final JpaTaskRepository repository;

    public TaskRepositoryAdapter(
            JpaTaskRepository repository
    ) {
        this.repository = repository;
    }

    @Override
    public Task save(Task task) {
        return repository.save(task);
    }

    @Override
    public List<Task> findAll() {
        return repository.findAll();
    }
}