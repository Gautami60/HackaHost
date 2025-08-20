import { User } from "@shared/schema";

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

class AuthService {
  private user: User | null = null;

  constructor() {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  async login(email: string, password: string): Promise<User | null> {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }
      return null;
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  }

  async register(userData: any): Promise<User | null> {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const user = await response.json();
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }
      return null;
    } catch (error) {
      console.error('Registration error:', error);
      return null;
    }
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
  }

  getUser(): User | null {
    return this.user;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }
}

export const authService = new AuthService();
