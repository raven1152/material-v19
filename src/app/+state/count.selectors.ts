import { createFeatureSelector, createReducer, on } from '@ngrx/store';

export const selectCounter = createFeatureSelector<number>('count');
