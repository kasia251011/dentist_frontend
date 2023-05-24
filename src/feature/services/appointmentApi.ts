import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Appointment } from './types/Appointment';
import { compareAppointmentsByDate } from '../../utilities';

export const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Appointments', 'PatientAppointments'],
  endpoints: (builder) => ({
    getAppointmentsByDate: builder.query<Appointment[], string>({
      query: (date) => `appointments?date=${date}`,
      transformResponse: (appointments: Appointment[]) => {
        return appointments.sort(compareAppointmentsByDate);
      },
      providesTags: ['Appointments']
    }),
    getAppointmentsByPatient: builder.query<Appointment[], string>({
      query: (patientId) => `appointments?patientId=${patientId}`,
      transformResponse: (appointments: Appointment[]) => {
        return appointments
          .filter((app) => new Date(app.date) < new Date())
          .sort(compareAppointmentsByDate);
      },
      providesTags: ['PatientAppointments']
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
      invalidatesTags: ['Appointments', 'PatientAppointments']
    }),
    deleteAppointmenttById: builder.mutation<Appointment, string>({
      query: (id) => ({
        url: `appointments/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Appointments', 'PatientAppointments']
    })
  })
});

export const {
  useGetAppointmentsByDateQuery,
  useGetAppointmentsByIdQuery,
  useAddAppointmentMutation,
  useDeleteAppointmenttByIdMutation,
  useGetAppointmentsByPatientQuery
} = appointmentApi;
