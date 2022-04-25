// Core
import { composeWithDevTools } from '@redux-devtools/extension';
import { Context, createWrapper } from 'next-redux-wrapper';
import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Store,
} from 'redux';
import { createLogger } from 'redux-logger';
// import * as R from 'ramda';
// Other
import { AppState, rootReducer } from './rootReducer';

let store: any;

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
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// ---Code for the basic example without middleware:
const devtools =
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f: any) => f;

// export const initStore = (
//   preloadedState?: AppState
// ): Store<AppState, AnyAction> => {
//   const defaultState = preloadedState
//     ? createStore(rootReducer).getState()
//     : {};
//   const currentState = R.mergeDeepRight(defaultState, preloadedState);

//   const initedStore = createStore(
//     rootReducer,
//     currentState,
//     bindMiddleware([thunk])
//   );

//   return initedStore;
// };
// export const initializeStore = (preloadedState?: AppState) => {
//   let initializedStore = store ?? initStore(preloadedState);

//   // после навигации на страницу с инициализированным хранилищем — мержим состояние с текущим состояние хранилища
//   // и создаём новый стор
//   if (preloadedState && store) {
//     initializedStore = initStore(
//       R.mergeRight(preloadedState, store.getState())
//     );

//     // сбрсываем хранилище
//     store = undefined;
//   }

//   // Для SSG & SSR всегда создаём новое хранилище
//   if (typeof window === 'undefined') {
//     return initializedStore;
//   }

//   // Cоздаём хранилище
//   if (!store) {
//     store = initializedStore;
//   }

//   return initializedStore;
// };

export const makeStore = (initialState = {}) =>
  createStore(rootReducer, initialState, compose(devtools));

// create a makeStore function
// const makeStore = (context: Context) =>
//   createStore(
//     rootReducer,
//     bindMiddleware([])
//   );

// export an assembled wrapper
export const wrapper = createWrapper<Store<AppState>>(makeStore);

export type AppDispatch = typeof store.dispatch;
