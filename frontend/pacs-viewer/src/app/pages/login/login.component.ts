import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import md5 from 'md5';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { doLogin, loginComplete } from 'src/app/core/store/auth/auth.actions';
import { Actions, ofType } from '@ngrx/effects';
import { AuthState } from 'src/app/core/store/auth/auth.reducer';

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
    private router: Router,
    private _actions: Actions
  ) {}

  login(): void {
    const { username, password } = this.user;
    const pwd = md5(username + password);

    this.store.dispatch(doLogin({ username, password: pwd }));
    this._actions.pipe(ofType(loginComplete)).subscribe((result: AuthState) => {
      console.log(result, 33);
      const { isLoggedIn } = result;
      if (isLoggedIn) {
        this.router.navigate(['/home']);
      } else {
        console.log(result);
      }
    });
  }
}
