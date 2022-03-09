// Core
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import data from '../../data/data.json';
import { selectAllPositions } from '../bus/positions/position-selectors';
import { IDataType } from '../types';
import { JobPositionComponent } from './JobPosition';

type PropsType = {
  children?: never;
};

const JobListComponent: FC<PropsType> = (): ReactElement => {
  const positions = useSelector(selectAllPositions)

  return (
    <div className='job-list'>
      {positions.map((item: IDataType) => (
        <JobPositionComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobListComponent };
