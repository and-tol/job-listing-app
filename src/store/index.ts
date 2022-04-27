// Core
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

// import { Action } from 'redux';
import logger from 'redux-logger';

import { filterReducer } from '../bus/filters/filters-slice';
import { positionReducer } from '../bus/positions/position-slice';

export const rootStore = () =>
  configureStore({
    reducer: {
      positions: positionReducer,
      filters: filterReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

export type AppStore = ReturnType<typeof rootStore>;
// export type AppStore = typeof rootStore;

export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof rootStore; // FIXME type dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(rootStore);
