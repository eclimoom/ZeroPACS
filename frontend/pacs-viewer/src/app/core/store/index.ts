import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment';

import {
  settingsReducer,
  SettingsState,
  settingsMetaReducer,
} from './settings';
import { authReducer, AuthState } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

export interface AppState {
  settings: SettingsState;
  userInfo: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
  userInfo: authReducer,
};

// this will save part of redux store into localstorage
// and restore this part on app init
export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['settings', 'userInfo'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [
  localStorageSyncReducer,
  settingsMetaReducer,
].concat(
  environment.production
    ? [] // production only meta reducers
    : [] // dev only meta reducers
);

export const effects = [AuthEffects];
