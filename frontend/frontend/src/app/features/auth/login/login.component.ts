import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  message = signal('');
  isLoading = signal(false);

  constructor(
    private api: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    if (!this.email() || !this.password()) {
      this.message.set('Preencha todos os campos!');
      return;
    }

    this.isLoading.set(true);
    this.message.set('');

    this.api.login({
      email: this.email(),
      password: this.password()
    }).subscribe({
      next: (res: any) => {
        this.authService.setAuth(res.token, res.user);
        this.message.set('Login realizado! Redirecionando...');
        setTimeout(() => {
          this.router.navigate(['/tasks']);
        }, 1000);
      },
      error: (err) => {
        console.error('Erro no login:', err);
        this.message.set('Erro no login! Verifique suas credenciais.');
        this.isLoading.set(false);
      }
    });
  }
}
