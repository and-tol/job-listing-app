// Core
import { combineReducers } from 'redux';
import { positionReducer } from '../bus/positions/position-reducer';

export const rootReducer = combineReducers({ positions: positionReducer });

export type AppState = ReturnType<typeof rootReducer>;
