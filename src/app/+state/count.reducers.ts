import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './count.actions';
import { countState } from './count.state';

export const counterReducer = createReducer(
  countState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export const reducers = {
  'count': counterReducer,
}
