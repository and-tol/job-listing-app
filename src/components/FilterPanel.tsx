import { FC, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// UI
import { CardUI } from '../UI/Card';
import { StackUI } from '../UI/Stack';
import { BadgeUI } from '../UI/Badge';
// Instruments
import {
  selectFilters,
  removeFilter,
  clearFilter,
} from '../bus/filters/filters-slice';

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
    <CardUI className = 'filter-panel'>
      <div className = 'filter-panel-wrapper'>
        <StackUI>
          { currentFilters.map((filter) => (
            <BadgeUI
              key = { filter }
              variant = 'clearable'
              onClick = { () => dispatch(removeFilter(filter)) }>
              { filter }
            </BadgeUI>
          )) }
        </StackUI>

        <button className = 'link' onClick = { () => dispatch(clearFilter()) }>
          Clear
        </button>
      </div>
    </CardUI>
  );
};

export { FilterPanelComponent };
