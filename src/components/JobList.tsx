// Core
import { FC, ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../bus/filters/filters-slice';

// Types
import { IDataType } from '../types';
import { usePositions } from './hooks/use-position';
import { JobPositionComponent } from './JobPosition';

type PropsType = {
  children?: never;
};

const JobListComponent: FC<PropsType> = (): ReactElement => {
  const dispatch = useDispatch();
  const positions = usePositions();

  const handleAddFilter = useCallback(
    (filter: string): void => {
      dispatch(addFilter(filter));
    },
    [dispatch]
  );

  return (
    <div className = 'job-list'>
      { positions.map((item: IDataType) => (
        <JobPositionComponent
          key = { item.id }
          handleAddFilter = { handleAddFilter }
          { ...item }
        />
      )) }
    </div>
  );
};

export { JobListComponent };
