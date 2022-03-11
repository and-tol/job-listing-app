import { HYDRATE } from 'next-redux-wrapper';
import { ActionType } from '../../types';
import { types } from './position-types';

export const positionReducer = (state = [], action: ActionType) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = { ...state, ...action.payload };
      return nextState;
    case types.ADD_POSITIONS:
      return action.payload;

    default:
      return state;
  }
};
