import { HYDRATE } from 'next-redux-wrapper';
import { ActionType, IDataType } from '../../types';
import { types } from './position-types';

const initialState: IDataType[] = [];

export const positionReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
  case HYDRATE:
    return [...state, ...action.payload.positions];

  case types.ADD_POSITIONS:
    return [...state, ...action.payload];

  default:
    return state;
  }
};
