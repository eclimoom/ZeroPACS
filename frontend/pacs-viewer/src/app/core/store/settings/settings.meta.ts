import { Action, ActionReducer, INIT } from '@ngrx/store';

import * as actions from './settings.actions';
import { SettingsState } from './settings.reducer';

const body = document.querySelector('body');
// meta reducer that applies layout classes based on settings reducer
export function settingsMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state: { settings: SettingsState }, action: Action) => {
    // build new state
    const result = reducer(state, action);

    // use our middleware only for INIT action and for Settings actions
    if (
      action.type === INIT ||
      actions.SettingsActionTypes.includes(action.type)
    ) {
      handleCssClasses(result.settings, action);
    }

    // pass state into next chain
    return result;
  };
}

function handleCssClasses(state: SettingsState, action: Action) {
  //   handleClassCondition(state.fixedHeader, 'header-function-fixed', body);
  //   handleClassCondition(state.fixedNavigation, 'nav-function-fixed', body);
  //   handleClassCondition(state.minifyNavigation, 'nav-function-minify', body);
  //   handleClassCondition(state.hideNavigation, 'nav-function-hidden', body);
}
