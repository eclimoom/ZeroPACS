import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { loginSuccess } from './auth.actions';
export interface AuthState {
  access_token?: string;
  permissions?: string[];
  userid?: string;
  username?: string;
}

// here you can configure initial state of your app
// for all your users
export const initialState: AuthState = {
  access_token: '',
  permissions: [],
  userid: '',
  username: '',
};
export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action): AuthState => {
    console.log('userInfo state', state, action);
    return action.userInfo;
  })
);
