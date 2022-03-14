import { ActionType } from '../../types';
import { types } from './position-types';

export const positionActions = Object.freeze({
  addPositions: (positions: any): ActionType => ({
    type: types.ADD_POSITIONS,
    payload: positions,
  }),
});
