import { FC, ReactElement } from 'react';
import data from '../../data/data.json';
import { JobPositionComponent } from './JobPosition';

type PropsType = {
  children?: never;
};

const JobListComponent: FC<PropsType> = (): ReactElement => {
  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPositionComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobListComponent };
