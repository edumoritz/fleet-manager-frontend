import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isSignUp = false;

  login = {
    username: '',
    password: '',
    type_user: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async onSubmit() {
    try {
      const result = await this.authService.login(this.login);
      console.log('Login efetuado: ', result);

      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }

  onSignUp() {
    this.isSignUp = true;
  }

  onSignIn() {
    this.isSignUp = false;
  }
}
