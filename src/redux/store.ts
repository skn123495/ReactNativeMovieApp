import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authSlice from './reducers/authSlice';
import chatSlice from './reducers/chatSlice';
import rootSaga from './saga';
import loaderSlice from './reducers/loaderSlice';

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    auth: authSlice,
    chat: chatSlice,
    loaderExp: loaderSlice,
  },
  middleware: [saga],
});
saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
