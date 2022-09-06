import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import md5 from 'md5';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import {
//   loginAction,
//   loginSuccess,
// } from '../../core/store/actions/auth.actions';
import { setUserInfo } from '../../core/store/app.action';
import { User } from 'src/app/core/store/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: any = { username: 'hejunji', password: '1' };
  constructor(
    private store: Store,
    private auth: AuthService,
    private router: Router
  ) {}

  login(): void {
    const { username, password } = this.user;
    const pwd = md5(username + password);
    this.auth.login({ username, password: pwd }).subscribe(
      (data: any) => {
        // console.log(data);
        // this.store.dispatch(loginAction({ user: data }));
        this.store.dispatch(setUserInfo(data));
        // this.router.navigate(['/home']);
      },
      (err: any) => {
        console.log(err);
      }
    );
    // this.store.dispatch(loginAction({ user: { username, password: pwd } }));
    // );
  }
}
