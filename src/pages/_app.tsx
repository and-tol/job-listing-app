import type { AppProps } from 'next/app';
import { FC, ReactElement } from 'react';
import { wrapper } from '../store';

import '../styles/index.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  // const store=
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
