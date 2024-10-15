import { configureStore } from '@reduxjs/toolkit';
import storyboardReducer from './storyboardSlice';

export const store = configureStore({
  reducer: {
    storyboard: storyboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;