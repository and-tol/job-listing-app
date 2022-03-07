import { FC, ReactElement } from 'react';

type PropsType = {
  children?: never;
};

const TheHeaderComponent: FC<PropsType> = (): ReactElement => {
  return <header className='header' />;
};

export { TheHeaderComponent };
