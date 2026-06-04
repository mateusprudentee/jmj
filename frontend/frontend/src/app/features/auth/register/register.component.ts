
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  message = signal('');
  isLoading = signal(false);
  success = signal(false);

  constructor(
    private api: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    // Validações
    if (!this.name() || !this.email() || !this.password()) {
      this.message.set('Preencha todos os campos!');
      this.success.set(false);
      return;
    }

    if (this.password() !== this.confirmPassword()) {
      this.message.set('As senhas não coincidem!');
      this.success.set(false);
      return;
    }

    if (this.password().length < 6) {
      this.message.set('A senha deve ter no mínimo 6 caracteres!');
      this.success.set(false);
      return;
    }

    this.isLoading.set(true);
    this.message.set('');

    this.api.register({
      name: this.name(),
      email: this.email(),
      password: this.password()
    }).subscribe({
      next: (res: any) => {
        this.success.set(true);
        this.message.set('Usuário criado com sucesso! Redirecionando para login...');

        // Limpar formulário
        this.name.set('');
        this.email.set('');
        this.password.set('');
        this.confirmPassword.set('');

        // Redirecionar para login após 2 segundos
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        console.error('Erro no registro:', err);
        this.success.set(false);

        if (err.error && err.error.error) {
          this.message.set(err.error.error);
        } else if (err.status === 0) {
          this.message.set('Erro de conexão com o servidor!');
        } else {
          this.message.set('Erro ao criar usuário! Tente novamente.');
        }

        this.isLoading.set(false);
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
