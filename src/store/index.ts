// Core
import { composeWithDevTools } from '@redux-devtools/extension';
import { Context, createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
// Other
import { rootReducer } from './rootReducer';

let store;

const logger = createLogger({
  duration: true,
  timestamp: true,
  collapsed: true,
  diff: true,
  colors: {
    title: (action): string => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: (): string => '#1C5FAF',
    action: (): string => '#149945',
    nextState: (): string => '#A47104',
    error: (): string => '#ff0005',
  },
});

const bindMiddleware = (middlewares: Middleware[]) => {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    middlewares?.push(logger);
  }

  return composeWithDevTools(applyMiddleware(...middlewares));
};

// ---Redux DevTools
// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// ---Code for the basic example without middleware:
const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f:any) => f

export const makeStore = (initialState = {}) =>
  createStore(rootReducer, initialState, compose(devtools));

// create a makeStore function
// const makeStore = (context: Context) =>
//   createStore(
//     rootReducer,
//     bindMiddleware([])
//   );
// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
