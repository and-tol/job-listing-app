import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: string[] = [];

const filterSlice = createSlice({
  name: '@@filter',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter: (state, action) =>
      state.filter((item) => item !== action.payload),
    clearFilter: () => initialState,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.filters) {
        return state;
      }

      return [...state, ...action.payload.filters];
    },
  },
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Selectors
import { AppState } from '../../store';
export const selectFilters = (state: AppState) => state.filters;
