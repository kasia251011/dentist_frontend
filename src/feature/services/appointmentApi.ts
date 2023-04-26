import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Appointment } from './types/Appointment';

export const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Appointments'],
  endpoints: (builder) => ({
    getAppointmentsByDate: builder.query<Appointment[], string>({
      query: (date) => `appointments?date=${date}`,
      providesTags: ['Appointments']
    }),
    getAppointmentsById: builder.query<Appointment, string>({
      query: (id) => `appointments/${id}`
    }),
    addAppointment: builder.mutation<Appointment, Appointment>({
      query: (appointment) => ({
        url: '/appointments',
        method: 'POST',
        body: appointment
      }),
      invalidatesTags: ['Appointments']
    }),
    deleteAppointmenttById: builder.mutation<Appointment, string>({
      query: (id) => ({
        url: `appointments/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Appointments']
    })
  })
});

export const {
  useGetAppointmentsByDateQuery,
  useGetAppointmentsByIdQuery,
  useAddAppointmentMutation,
  useDeleteAppointmenttByIdMutation
} = appointmentApi;
