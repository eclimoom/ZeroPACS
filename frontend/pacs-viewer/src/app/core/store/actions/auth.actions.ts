import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
}

export const loginAction = createAction(
  '[Login API] user login',
  props<{ user: User }>()
);

export const loginSuccess = createAction(
  '[Login API] user login success',
  props<{ user: User }>()
);

// export const setUser = createAction('[API] set user', props<{ user: User }>());

// export class Login implements Action {
//   readonly type = AuthActionTypes.LoginAction;

//   constructor(public payload: { user: User }) {}
// }

// export class Logout implements Action {
//   readonly type = AuthActionTypes.LogoutAction;
// }

// export type AuthActions = Login | Logout;
