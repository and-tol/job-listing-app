// Core
import Image from 'next/image';
import { FC, ReactElement } from 'react';
import { IDataType } from '../types';
// UI
import { BadgeUI } from '../UI/Badge';
import { CardUI } from '../UI/Card';
import { StackUI } from '../UI/Stack';

interface PropsType extends IDataType {
  handleAddFilter: (filter: string) => void;
}

const JobPositionComponent: FC<PropsType> = ({
  id,
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleAddFilter,
}): ReactElement => {
  const startBages: string[] = [];
  const badges: string[] = startBages.concat(
    role,
    level,
    ...languages,
    ...tools
  );
  // const badges: string[] = [];

  return (
    <CardUI isFeatured={featured}>
      <div className='job-position'>
        <div className='job-position-info'>
          {/* <Image
            className='job-position-avatar'
            src={logo}
            alt={company}
            width={100}
            height={100}
          /> */}
          <img className='job-position-avatar' src={logo} alt={company} />
          <div className='job-position-body'>
            <div className='job-postion-company'>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <StackUI>
                  {isNew && (
                    <BadgeUI variant='rounded' colorScheme='primary'>
                      NEW!
                    </BadgeUI>
                  )}
                  {featured && (
                    <BadgeUI variant='rounded' colorScheme='dark'>
                      FEATURED
                    </BadgeUI>
                  )}
                </StackUI>
              )}
            </div>
            <h2 className='job-position-title'>{position}</h2>
            <StackUI>
              <div className='job-position-meta'>{postedAt}</div>
              <div className='job-position-meta'>{contract}</div>
              <div className='job-position-meta'>{location}</div>
            </StackUI>
          </div>
        </div>
        <StackUI>
          {badges.map((badge: string) => (
            <BadgeUI
              key={badge}
              onClick={() => handleAddFilter(badge)}
            >
              {badge}
            </BadgeUI>
          ))}
        </StackUI>
      </div>
    </CardUI>
  );
};

export { JobPositionComponent };
