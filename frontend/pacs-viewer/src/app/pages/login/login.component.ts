import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import md5 from 'md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: any = { username: 'hejunji', password: '1' };
  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    const { username, password } = this.user;
    const pwd = md5(username + password);
    this.auth.login({ username, password: pwd }).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
