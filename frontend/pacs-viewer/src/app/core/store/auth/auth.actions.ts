import { createAction, props, union } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const loginAction = createAction(
  '[auth] LOGIN_ACTION',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[auth] LOGIN_SUCCESS',
  props<{ userInfo: User }>()
);

export const loginFail = createAction(
  '[auth] LOGIN_FAIL',
  props<{ error: Error }>()
);

const all = union({ loginAction, loginSuccess, loginFail });
export type AuthActionTypes = typeof all;
