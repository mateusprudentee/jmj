import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id?: number;
  title: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  createdAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private authApiUrl = 'http://localhost:8080/api';
  private tasksApiUrl = 'http://localhost:8081/api';

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authApiUrl}/auth/login`, data);
  }

  register(data: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.authApiUrl}/auth/register`, data);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.tasksApiUrl}/tasks`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.tasksApiUrl}/tasks`, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.tasksApiUrl}/tasks/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.tasksApiUrl}/tasks/${id}`);
  }
}
