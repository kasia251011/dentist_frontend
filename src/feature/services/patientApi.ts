import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Patient from './types/Patient';

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Patients'],
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], void>({
      query: () => 'patients',
      providesTags: ['Patients']
    }),
    getPatientById: builder.query<Patient, string>({
      query: (id) => `patients/${id}`
    }),
    addPatient: builder.mutation<Patient, Patient>({
      query: (patient) => ({
        url: '/patients',
        method: 'POST',
        body: patient
      }),
      invalidatesTags: ['Patients']
    }),
    deletePatienttById: builder.mutation<Patient, string>({
      query: (id) => ({
        url: `patients/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Patients']
    })
  })
});

export const {
  useGetPatientsQuery,
  useGetPatientByIdQuery,
  useAddPatientMutation,
  useDeletePatienttByIdMutation,
  useLazyGetPatientsQuery
} = patientApi;
