import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, concatMap, catchError } from 'rxjs';
import { loginAction, loginSuccess, loginFail } from './auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private authService: AuthService
  ) {}

  login = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loginAction),
      concatMap((action) =>
        this.authService.loginV2({ ...action }).pipe(
          map((result: any) => {
            const { data, success } = result;
            if (success) {
              data.uuid = new Date();
              return loginSuccess({ userInfo: data });
            } else {
              return loginFail(data);
            }
          }),
          catchError((error) => of(loginFail(error)))
        )
      )
    );
  });
}
