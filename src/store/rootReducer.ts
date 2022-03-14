// Core
import { combineReducers } from 'redux';
import { filterReducer } from '../bus/filters/filter-reducer';
import { positionReducer } from '../bus/positions/position-reducer';

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
