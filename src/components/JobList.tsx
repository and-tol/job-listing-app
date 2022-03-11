// Core
import { FC, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPositions } from '../bus/positions/position-selectors';
import { IDataType } from '../types';
import { JobPositionComponent } from './JobPosition';
// Other
import { filterActions } from '../bus/filters/filter-actions';

type PropsType = {
  children?: never;
};

const JobListComponent: FC<PropsType> = (): ReactElement => {
  const dispatch = useDispatch();
  const positions: IDataType[] = useSelector(selectAllPositions);

  const handleAddFilter = (filter: string): void => {
    dispatch(filterActions.addFilter(filter));
  };

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
