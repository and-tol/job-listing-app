import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from '../../store';
import { IDataType } from '../../types';

const initialState: IDataType[] = [];

const positionSlice = createSlice( {
  name: '@@position',
  initialState,
  reducers: {
    addPositions: ( state, action ) => {
      return [...state, ...action.payload];
    }
  },
  extraReducers: {
    [HYDRATE]: ( state, action ) => {
      if ( !action.payload.positions ) {
        return state
      }
      return [...state, ...action.payload.positions];
    },
  }
} )

export const { addPositions } = positionSlice.actions
export const positionReducer = positionSlice.reducer

// Selectors
export const selectVisiblePosition = (
  state: AppState,
  filters: string[] = []
) => {
  if ( filters.length === 0 ) {
    return state.positions;
  }

  return state.positions.filter( ( pos: IDataType ) => {
    const startPositions: string[] = [];
    const posFilters: string[] = startPositions.concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools
    );

    return filters.every( ( filter: string ) => posFilters.includes( filter ) );
  } );
};
