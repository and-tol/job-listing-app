import { types } from './position-types';

export type ActionType = {
  type: string;
  payload?: any;
  error?: any;
};

export const addPositions = (positions: any): ActionType => ({
  type: types.ADD_POSITIONS,
  payload: positions,
});
