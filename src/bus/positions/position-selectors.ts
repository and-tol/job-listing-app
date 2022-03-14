import { AppState } from '../../store/rootReducer';
import { IDataType } from '../../types';

export const selectAllPositions = (state: AppState) => state.positions;

export const selectVisiblePosition = (
  state: AppState,
  filters: string[] = []
) => {
  if (filters.length === 0) {
    return state.positions;
  }

  return state.positions.filter((pos: IDataType) => {
    const startPositions: string[] = [];
    const posFilters: string[] = startPositions.concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools
    );

    return filters.every((filter: string) => posFilters.includes(filter));
  });
};
