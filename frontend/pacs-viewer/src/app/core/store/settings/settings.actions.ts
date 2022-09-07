import { createAction } from '@ngrx/store';

export const toggleFixedHeader = createAction('[Settings] Toggle Fixed Header');
export const toggleFixedNavigation = createAction(
  '[Settings] Toggle Fixed Navigation'
);
export const toggleMinifyNavigation = createAction(
  '[Settings] Toggle Minify Navigation'
);
export const toggleHideNavigation = createAction(
  '[Settings] Toggle Hide Navigation'
);

export const SettingsActionTypes: string[] = [
  toggleFixedHeader.type,
  toggleFixedNavigation.type,
  toggleMinifyNavigation.type,
  toggleHideNavigation.type,
];
