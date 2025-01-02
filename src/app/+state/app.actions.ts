import { createAction, props } from '@ngrx/store';

export const updateBoolValue = createAction(
  '[App] Update BoolValue',
  props<{ boolValue: boolean }>(),
);

export const updateDateValue = createAction(
  '[App] Update Date Value',
  props<{ dateValue: string }>(),
);
