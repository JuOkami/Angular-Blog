import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    let user = { id: 0, name: this.name, password: this.password };
    if (this.userService.isRegistered(user)) {
      this.authService.login(user);
      this.router.navigate(['/']);
    } else {
      this.message = 'Identification incorrecte';
    }
  }
}
