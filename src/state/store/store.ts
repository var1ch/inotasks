import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { listsSlice } from '../lists';
import { tasksSlice } from '../tasks';
import { subtasksSlice } from '../subtasks';

const rootReducer = combineReducers({
  lists: listsSlice.reducer,
  tasks: tasksSlice.reducer,
  subtasks: subtasksSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middleware.push(createFlipperDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: false,
});

export default store;
export type ReduxStore = ReturnType<typeof rootReducer>;
