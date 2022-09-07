import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';

export interface SettingsState {
  // app layout
  fixedHeader: boolean;
  fixedNavigation: boolean;
  minifyNavigation: boolean;
  hideNavigation: boolean;
}

// here you can configure initial state of your app
// for all your users
export const initialState: SettingsState = {
  // app layout
  fixedHeader: true,
  fixedNavigation: true,
  minifyNavigation: true,
  hideNavigation: false,
};

export const settingsReducer = createReducer(
  initialState,

  on(SettingsActions.toggleFixedHeader, (state) => ({
    ...state,
    fixedHeader: !state.fixedHeader,
  })),
  on(SettingsActions.toggleFixedNavigation, (state) => ({
    ...state,
    fixedNavigation: !state.fixedNavigation,
  })),
  on(SettingsActions.toggleMinifyNavigation, (state) => ({
    ...state,
    minifyNavigation: !state.minifyNavigation,
  })),
  on(SettingsActions.toggleHideNavigation, (state) => ({
    ...state,
    hideNavigation: !state.hideNavigation,
  }))
);
