// Core
import { FC, ReactElement, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Other
import { selectVisiblePosition } from '../bus/positions/position-selectors';
import { IDataType } from '../types';
import { JobPositionComponent } from './JobPosition';
import { filterActions } from '../bus/filters/filter-actions';
import { selectFilters } from '../bus/filters/filter-selectors';
import { AppState } from '../store/rootReducer';

type PropsType = {
  children?: never;
};

const JobListComponent: FC<PropsType> = (): ReactElement => {
  const dispatch = useDispatch();
  const currentFilters: string[] = useSelector(selectFilters);
  const positions: IDataType[] = useSelector((state: AppState) => {
    return selectVisiblePosition(state, currentFilters);
  });

  const handleAddFilter = useCallback((filter: string): void => {
    dispatch(filterActions.addFilter(filter));
  }, []);

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
