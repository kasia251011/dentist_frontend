import { configureStore } from '@reduxjs/toolkit';
import { patientApi } from './services/patientApi';
import currentSessionReducer from './currentSession/currentSessionSlice';
import { appointmentApi } from './services/appointmentApi';
import { procedureApi } from './services/procedureApi';

export const store = configureStore({
  reducer: {
    [patientApi.reducerPath]: patientApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [procedureApi.reducerPath]: procedureApi.reducer,
    currentSession: currentSessionReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      patientApi.middleware,
      appointmentApi.middleware,
      procedureApi.middleware
    )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
