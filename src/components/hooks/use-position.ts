import { useSelector } from 'react-redux';
import { selectFilters } from '../../bus/filters/filters-slice';
import { selectVisiblePosition } from '../../bus/positions/position-slice';
import { AppState } from '../../store';
import { IDataType } from '../../types';

export const usePositions = () => {
  const currentFilters: string[] = useSelector(selectFilters);
  const positions: IDataType[] = useSelector((state: AppState) => {
    return selectVisiblePosition(state, currentFilters);
  });

  return positions;
};
