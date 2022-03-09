import { ActionType } from './position-actions';
import { types } from './position-types';

export const positionReducer = (state = [], action: ActionType) => {
  switch (action.type) {
    case types.ADD_POSITIONS:
      return action.payload

    default:
      return state;
  }
};
