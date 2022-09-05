import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: any = { username: '', password: '' };
  constructor(private auth: AuthService) {}

  login(): void {
    console.log(this.user);
    this.auth.login(this.user).subscribe((data: any) => {
      console.log(data);
    });
  }
}
