import { createReducer, on } from '@ngrx/store';
import { setAPIStatus, setUserInfo } from './app.action';
import { AppState } from './app.state';

export const initialState: Readonly<AppState> = {
  apiResponseMessage: '',
  apiStatus: '',
  userInfo: null,
};

export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus,
    };
  }),
  on(setUserInfo, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus,
    };
  })
);
