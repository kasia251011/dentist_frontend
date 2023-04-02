import { configureStore } from '@reduxjs/toolkit';
import { patientApi } from './services/patientApi';
import currentSessionReducer from './currentSession/currentSessionSlice';

export const store = configureStore({
  reducer: {
    [patientApi.reducerPath]: patientApi.reducer,
    currentSession: currentSessionReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(patientApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
