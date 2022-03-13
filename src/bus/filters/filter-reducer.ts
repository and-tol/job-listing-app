import { HYDRATE } from 'next-redux-wrapper';
import { ActionType } from '../../types';
import { types } from './filter-types';

const initialState: string[] = [];

export const filterReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case HYDRATE: {
      return [...state, ...action.payload.filters];
    }

    case types.ADD_FILTER:
      if (!state.includes(action.payload)) {
        console.log('ADD', action.payload);
        return [...state, action.payload];
      }
      return state;

    case types.REMOVE_FILTER:
      return state.filter(item => item !== action.payload);

    case types.CLEAR_FILTER:
      return initialState;

    default:
      return state;
  }
};
