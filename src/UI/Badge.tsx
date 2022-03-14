import Remove from '/public/images/icon-remove.svg';

import { FC, ReactElement, ReactNode } from 'react';
import { ActionType } from '../types';

type PropsType = {
  variant?: 'basic' | 'clearable' | 'rounded';
  colorScheme?: 'light' | 'primary' | 'dark';
  children: ReactNode;
  onClear?: () => ActionType;
  onClick?: () => void;
};

const BadgeUI: FC<PropsType> = ({
  variant = 'basic',
  colorScheme = 'light',
  children,
  onClear,
  onClick,
}): ReactElement => (
  <div
    className = { `badge badge--${variant} badge--${colorScheme}` }
    onClick = { onClick }
  >
    <span>{ children }</span>
    { variant === 'clearable' && (
      <div className = 'badge-remover' onClick = { onClear }>
        <Remove />
      </div>
    ) }
  </div>
);

export { BadgeUI };
