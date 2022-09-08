import { createAction, props, union } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const doLogin = createAction(
  '[Auth] login',
  props<{ username: string; password: string }>()
);
export const loginComplete = createAction(
  '[Auth] loginComplete',
  props<{ userInfo?: User; isLoggedIn: boolean; error?: any }>()
);

export const logout = createAction('[Auth] logout');
export const logoutComplete = createAction('[Auth] logoutComplete');
