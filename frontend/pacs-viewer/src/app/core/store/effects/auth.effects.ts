import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { setAPIStatus } from '../app.action';
import { AppState } from '../app.state';
import { AuthService } from '../../services/auth.service';
import { loginAction, loginSuccess } from '../actions/auth.actions';
import { selectAuth } from '../selector/auth.selector';

@Injectable()
export class BooksEffect {
  constructor(
    private actions$: Actions,
    private booksService: AuthService,
    private store: Store
  ) {}

  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      withLatestFrom(this.store.select(selectAuth)),
      mergeMap(([, bookformStore]) => {
        console.log(bookformStore, 'bookformStore');
        if (bookformStore.length > 0) {
          return EMPTY;
        }
        return this.booksService
          .loginV2()
          .pipe(map((data) => loginSuccess({ user: data })));
      })
    )
  );
}
