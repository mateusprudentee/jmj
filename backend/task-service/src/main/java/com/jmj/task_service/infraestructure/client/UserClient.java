package com.jmj.task_service.infraestructure.client;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class UserClient {

    private final RestTemplate restTemplate =
            new RestTemplate();

    public String findUser(Long id) {

        return restTemplate.getForObject(
                "http://localhost:8080/users/" + id,
                String.class
        );
    }
}