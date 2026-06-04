import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal<boolean>(false);
  currentUser = signal<any>(null);

  constructor(private router: Router) {
    this.checkAuthStatus();
  }

  private checkAuthStatus() {
    const token = localStorage.getItem('token');
    this.isAuthenticated.set(!!token);
    
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        this.currentUser.set(JSON.parse(userStr));
      } catch (e) {
        console.error('Erro ao parsear user:', e);
      }
    }
  }

  setAuth(token: string, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.isAuthenticated.set(true);
    this.currentUser.set(user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
