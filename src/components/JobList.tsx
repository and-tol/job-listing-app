// Core
import { FC, ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, selectFilters } from '../bus/filters/filters-slice';

// Other
import { selectVisiblePosition } from '../bus/positions/position-slice';
import { AppState } from '../store';
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
      dispatch(addFilter(filter));
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
