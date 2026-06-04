import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, Task } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = signal<Task[]>([]);
  isLoading = signal(true);
  newTaskTitle = signal('');

  private api = inject(ApiService);
  public authService = inject(AuthService);

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.isLoading.set(true);
    this.api.getTasks().subscribe({
      next: (data: Task[]) => {
        this.tasks.set(data || []);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Erro ao carregar tasks:', err);
        this.isLoading.set(false);
      }
    });
  }

  createTask() {
    if (!this.newTaskTitle().trim()) return;
    
    this.api.createTask({ title: this.newTaskTitle(), status: 'PENDING' }).subscribe({
      next: (task: Task) => {
        this.tasks.update(t => [task, ...t]);
        this.newTaskTitle.set('');
      },
      error: (err) => console.error('Erro ao criar task:', err)
    });
  }

  deleteTask(id: number) {
    if (confirm('Excluir tarefa?')) {
      this.api.deleteTask(id).subscribe({
        next: () => this.tasks.update(t => t.filter(task => task.id !== id)),
        error: (err) => console.error('Erro ao deletar task:', err)
      });
    }
  }

  updateStatus(task: Task, event: Event) {
    const select = event.target as HTMLSelectElement;
    const status = select.value as Task['status'];
    
    this.api.updateTask(task.id!, { ...task, status }).subscribe({
      next: (updatedTask: Task) => {
        this.tasks.update(t => t.map(item => item.id === updatedTask.id ? updatedTask : item));
      },
      error: (err) => console.error('Erro ao atualizar status:', err)
    });
  }

  logout() {
    this.authService.logout();
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'COMPLETED': return 'status-completed';
      case 'IN_PROGRESS': return 'status-progress';
      default: return 'status-pending';
    }
  }

  getStatusText(status: string): string {
    switch(status) {
      case 'COMPLETED': return '✅ Concluída';
      case 'IN_PROGRESS': return '🔄 Em andamento';
      default: return '⏳ Pendente';
    }
  }
}
