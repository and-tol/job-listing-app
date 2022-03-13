import { FC, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// UI
import { CardUI } from '../UI/Card';
import { StackUI } from '../UI/Stack';
import { BadgeUI } from '../UI/Badge';
// Instruments
import { selectFilters } from '../bus/filters/filter-selectors';
import { filterActions } from '../bus/filters/filter-actions';

type PropsType = {
  children?: never;
};

const FilterPanelComponent: FC<PropsType> = (): ReactElement | null => {
  const dispatch = useDispatch();
  const currentFilters: string[] = useSelector(selectFilters);

  if (!currentFilters.length) {
    return null;
  }

  return (
    <CardUI className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <StackUI>
          {currentFilters.map(filter => (
            <BadgeUI
              key={filter}
              variant='clearable'
              onClick={() => dispatch(filterActions.removeFilter(filter))}
            >
              {filter}
            </BadgeUI>
          ))}
        </StackUI>

        <button
          className='link'
          onClick={() => dispatch(filterActions.clearFilter())}
        >
          Clear
        </button>
      </div>
    </CardUI>
  );
};

export { FilterPanelComponent };
