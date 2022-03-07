import { FC, ReactElement, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  pos?: string;
};

const StackUI: FC<PropsType> = ({ children, pos }): ReactElement => (
  <div
    className='stack'
    style={{
      justifyContent: pos === 'center' ? 'center' : `flex-${pos}`,
    }}
  >
    {children}
  </div>
);

export { StackUI };
