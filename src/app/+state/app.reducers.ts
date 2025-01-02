import { createReducer, on } from '@ngrx/store';
import { updateBoolValue, updateDateValue } from './app.actions';
import { appState } from './app.state';

const appReducer = createReducer(
  appState,
  on(updateBoolValue, (
    state,
    { boolValue }
  ) => {
    console.log(boolValue);
    return {
      ...state,
      boolValue
    };
  }),
  on(updateDateValue, (
    state,
    { dateValue }
  ) => {
    console.log(dateValue);
    return {
      ...state,
      dateValue,
    };
  }),
);

export const reducers = {
  'app': appReducer,
};
