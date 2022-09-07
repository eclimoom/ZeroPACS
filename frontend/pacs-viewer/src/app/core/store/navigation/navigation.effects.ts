import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { activeUrl } from './navigation.actions';

@Injectable()
export class NavigationEffects {
  // mapToActiveUrl$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ROUTER_NAVIGATED),
  //     map((action: RouterNavigatedAction) => {
  //       return activeUrl({ url: action.payload.event.url });
  //     }),
  //     tap((action) =>
  //       // handleClassCondition(
  //       //   false,
  //       //   'mobile-nav-on',
  //       //   document.querySelector('body')
  //       // )
  //     // )
  //   )
  // );

  constructor(private actions$: Actions) {}
}
