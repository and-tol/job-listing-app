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

  const startPositions: any[] = [];

  return state.positions.filter((pos: IDataType) => {
    const posFilters = startPositions.concat(
      pos.role,
      pos.level,
      ...pos.level,
      ...pos.tools
    );

    return filters.every(filter=> posFilters.includes(filter));
  });
};
