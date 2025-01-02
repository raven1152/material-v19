import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectBoolValue = createSelector(
  selectAppState,
  (state: AppState) => {
    console.log(state);
    return state.boolValue;
  }
);

export const selectDateValue = createSelector(
  selectAppState,
  (state: AppState) => {
    console.log(state);
    return state.dateValue;
  }
);
