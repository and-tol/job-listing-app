import { HYDRATE } from 'next-redux-wrapper';
import { ActionType } from '../../types';
import { types } from './filter-types';

export const filterReducer = (state: string[] = [], action: ActionType) => {
  switch (action.type) {
    case HYDRATE:
      const nextState: string[] = [...state, ...action.payload];
      return nextState;
    case types.ADD_FILTER:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;
    case types.REMOVE_FILTER:
      return state.filter(item => item !== action.payload);
    case types.CLEAR_FILTER:
      return [];

    default:
      return state;
  }
};
