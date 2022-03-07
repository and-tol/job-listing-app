import { FC, ReactElement } from 'react';
// UI
import { CardUI } from '../UI/Card';
import { StackUI } from '../UI/Stack';
import { BadgeUI } from '../UI/Badge';

type PropsType = {
  children?: never;
};

const FilterPanelComponent: FC<PropsType> = (): ReactElement => {
  return (
    <CardUI className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <StackUI>
          <BadgeUI variant='clearable'>Frontend</BadgeUI>
          <BadgeUI variant='clearable'>Backend</BadgeUI>
          <BadgeUI variant='clearable'>React</BadgeUI>
        </StackUI>

        <button className='link'>Clear</button>
      </div>
    </CardUI>
  );
};

export { FilterPanelComponent };
