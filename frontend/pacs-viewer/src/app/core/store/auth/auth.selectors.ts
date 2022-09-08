import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureName } from './auth.reducer';

const selectAuthFeatureState = createFeatureSelector<any>(authFeatureName);
// export const selectUserInfo = createSelector(
//   selectGetUserState,
//   (state: AuthState) => state
// );

export const selectIsLoggedIn = createSelector(
  selectAuthFeatureState,
  (state: AuthState) => state.isLoggedIn
);

export const selectUserInfo = createSelector(
  selectAuthFeatureState,
  (state: AuthState) => state.userInfo
);
