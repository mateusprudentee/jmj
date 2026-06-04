package com.jmj.user_service.infraestructure.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.support.TaskExecutorAdapter;

import java.util.concurrent.Executors;

@Configuration
public class VirtualThreadConfig {

    @Bean
    public TaskExecutorAdapter taskExecutor() {

        return new TaskExecutorAdapter(
                Executors.newVirtualThreadPerTaskExecutor()
        );
    }
}