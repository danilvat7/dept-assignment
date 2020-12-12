/**
 * Root store settings
 * */
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import casesReducer from './cases';

export const store = configureStore({
  reducer: { cases: casesReducer },
  middleware: [thunkMiddleware],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
