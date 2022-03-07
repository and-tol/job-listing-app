import { FC, ReactElement } from 'react';
import { BadgeUI } from '../UI/Badge';
import { CardUI } from '../UI/Card';
import { StackUI } from '../UI/Stack';

type PropsType = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

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
          {badges.map(item => (
            <BadgeUI key={item}>{item}</BadgeUI>
          ))}
        </StackUI>
      </div>
    </CardUI>
  );
};

export { JobPositionComponent };
