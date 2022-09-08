import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService // private router: Router
  ) {}
  // private authService: AuthService // private readonly actions$: Actions,
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.doLogin),
      switchMap((payload) =>
        this.authService.login(payload).pipe((result: any) => result)
      ),
      map((result: any) =>
        AuthActions.loginComplete({
          userInfo: result.data,
          isLoggedIn: result.success,
        })
      )
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => this.authService.signOut()),
      map(() => AuthActions.logoutComplete())
    );
  });
}
