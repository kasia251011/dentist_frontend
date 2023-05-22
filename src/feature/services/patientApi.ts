import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Patient, { Diagnosis, Tooth } from './types/Patient';

export interface AddToothDiagnosisByPatientIdByToothNoI {
  id: string;
  toothNo: number;
  diagnosis: Diagnosis;
}

export interface GetPatientToothDiagnosisI {
  id: string;
  toothNo: number;
  index: number;
}

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Patients', 'Teeth'],
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], void>({
      query: () => 'patients',
      providesTags: ['Patients']
    }),
    getPatientById: builder.query<Patient, string>({
      query: (id) => `patients/${id}`
    }),
    getPatientTeeth: builder.query<Tooth[], string>({
      query: (id) => `patients/${id}/teeth`,
      providesTags: ['Teeth']
    }),
    getPatientToothDiagnosis: builder.query<Diagnosis, GetPatientToothDiagnosisI>({
      query: ({ id, toothNo, index }) => `patients/${id}/teeth/${toothNo}/${index}`
    }),
    addPatient: builder.mutation<Patient, Patient>({
      query: (patient) => ({
        url: '/patients',
        method: 'POST',
        body: patient
      }),
      invalidatesTags: ['Patients']
    }),
    deletePatientById: builder.mutation<Patient, string>({
      query: (id) => ({
        url: `patients/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Patients']
    }),
    addToothDiagnosisByPatientIdByToothNo: builder.mutation<
      Patient,
      AddToothDiagnosisByPatientIdByToothNoI
    >({
      query: ({ id, toothNo, diagnosis }) => ({
        url: `/patients/${id}/teeth/${toothNo}`,
        method: 'PATCH',
        body: diagnosis
      }),
      invalidatesTags: ['Teeth']
    })
  })
});

export const {
  useGetPatientsQuery,
  useGetPatientByIdQuery,
  useAddPatientMutation,
  useDeletePatientByIdMutation,
  useLazyGetPatientsQuery,
  useGetPatientTeethQuery,
  useAddToothDiagnosisByPatientIdByToothNoMutation,
  useGetPatientToothDiagnosisQuery
} = patientApi;
