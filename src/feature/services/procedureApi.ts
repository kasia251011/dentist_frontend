import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Procedure } from './types/Procedure';

export const procedureApi = createApi({
  reducerPath: 'procedureApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Procedures'],
  endpoints: (builder) => ({
    getProcedures: builder.query<Procedure[], void>({
      query: () => 'procedures',
      providesTags: ['Procedures']
    }),
    getProcedureById: builder.query<Procedure, string>({
      query: (id) => `procedures/${id}`
    }),
    addProcedure: builder.mutation<Procedure, Procedure>({
      query: (procedure) => ({
        url: '/procedures',
        method: 'POST',
        body: procedure
      }),
      invalidatesTags: ['Procedures']
    }),
    deleteProceduretById: builder.mutation<Procedure, string>({
      query: (id) => ({
        url: `procedures/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Procedures']
    })
  })
});

export const {
  useGetProceduresQuery,
  useGetProcedureByIdQuery,
  useAddProcedureMutation,
  useDeleteProceduretByIdMutation,
  useLazyGetProceduresQuery
} = procedureApi;
