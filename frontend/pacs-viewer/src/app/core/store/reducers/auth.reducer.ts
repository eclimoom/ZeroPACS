import { createReducer, on, State } from '@ngrx/store';
import { User } from '../models/user';
import { loginSuccess } from '../actions/auth.actions';
// import { AppState } from '../app.state';

export const initialState: Readonly<User> = {};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => ({ ...state, user: action }))
);
