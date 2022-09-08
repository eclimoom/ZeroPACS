import { createReducer, on, State } from '@ngrx/store';
import { User } from 'src/app/models/user';
import * as authActions from './auth.actions';

export const authFeatureName = 'auth';

export interface AuthState {
  userInfo?: User | undefined;
  isLoggedIn: boolean;
  error?: any;
}

// here you can configure initial state of your app
// for all your users
export const initialState: AuthState = {
  userInfo: undefined,
  isLoggedIn: false,
};
export const authReducer = createReducer(
  initialState,
  on(
    authActions.loginComplete,
    (state, { userInfo, isLoggedIn }): AuthState => {
      // console.log('userInfo state', userInfo, isLoggedIn);
      return { ...state, userInfo, isLoggedIn };
    }
  ),
  on(authActions.logout, (state, {}): AuthState => {
    return {
      ...state,
      userInfo: undefined,
      isLoggedIn: false,
    };
  })
);
