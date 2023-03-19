import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Patient from './types/Patient';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], void>({
      query: () => 'patients'
    }),
    getPatientById: builder.query<Patient, number>({
      query: (id) => `patients/${id}`
    })
  })
});

export const { useGetPatientsQuery, useGetPatientByIdQuery } = patientApi;
