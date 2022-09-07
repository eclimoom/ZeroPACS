import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import md5 from 'md5';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import {
  loginAction,
  loginSuccess,
} from 'src/app/core/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: any = { username: 'hejunji', password: '1' };
  constructor(
    private store: Store,
    // private auth: AuthService,
    private router: Router
  ) {}

  login(): void {
    const { username, password } = this.user;
    const pwd = md5(username + password);

    this.store.dispatch(loginAction({ username, password: pwd }));

    // this.auth.login({ username, password: pwd }).subscribe(
    //   (data: User) => {
    //     this.store.dispatch(loginSuccess({ userInfo: data }));
    this.router.navigate(['/home']);
    //   },
    //   (err: any) => {
    //     console.log(err);
    //   }
    // );
  }
}
