// Core
import { FC, ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../bus/filters/filter-actions';
import { selectFilters } from '../bus/filters/filter-selectors';
// Other
import { selectVisiblePosition } from '../bus/positions/position-selectors';
import { AppState } from '../store/rootReducer';
// Types
import { IDataType } from '../types';
import { JobPositionComponent } from './JobPosition';

type PropsType = {
  children?: never;
};

const JobListComponent: FC<PropsType> = (): ReactElement => {
  const dispatch = useDispatch();
  const currentFilters: string[] = useSelector(selectFilters);
  const positions: IDataType[] = useSelector((state: AppState) => {
    return selectVisiblePosition(state, currentFilters);
  });

  const handleAddFilter = useCallback(
    (filter: string): void => {
      dispatch(filterActions.addFilter(filter));
    },
    [dispatch]
  );

  return (
    <div className='job-list'>
      {positions.map((item: IDataType) => (
        <JobPositionComponent
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobListComponent };
