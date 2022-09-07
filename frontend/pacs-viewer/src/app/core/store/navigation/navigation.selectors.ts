import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NavigationState } from './navigation.reducer';

export const selectNavigationState = createFeatureSelector<NavigationState>('navigation');

export const selectNavigationItems = createSelector(selectNavigationState, (state) => state.items);
