import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectUserInfo = createFeatureSelector<any>('userInfo');
// export const selectUserInfo = createSelector(
//   selectGetUserState,
//   (state: AuthState) => state
// );
