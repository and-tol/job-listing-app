import { FC, ReactElement, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  isFeatured?: boolean;
  className?: string;
};

const CardUI: FC<PropsType> = ({
  children,
  isFeatured,
  className,
}): ReactElement => {
  return (
    <div
      className = { `card${isFeatured ? ' card--featured' : ''}${
        className ? ' ' + className : ''
      }` }
    >
      { children }
    </div>
  );
};

export { CardUI };
