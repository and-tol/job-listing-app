import { ActionType } from '../../types';
import { types } from './filter-types';

export const filterActions = Object.freeze({
  addFilter: (filter: string): ActionType => ({
    type: types.ADD_FILTER,
    payload: filter,
  }),
  removeFilter: (filter: string): ActionType => ({
    type: types.REMOVE_FILTER,
    payload: filter,
  }),
  clearFilter: (): ActionType => ({
    type: types.CLEAR_FILTER,
  }),
});
