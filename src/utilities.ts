import { Appointment } from './feature/services/types/Appointment';

export const getAge = (dateOfBirth: Date) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const getDate = (date: Date | undefined) => {
  return date?.toLocaleString() ? new Date(date).toLocaleDateString() : '';
};

export const compareAppointmentsByDate = (a: Appointment, b: Appointment) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA > dateB) return 1;
  else if (dateA < dateB) return -1;
  else {
    const timeValuesA = a.time.split(':');
    const timeValuesB = b.time.split(':');

    const hoursA = parseInt(timeValuesA[0]);
    const minutesA = parseInt(timeValuesA[1]);

    const hoursB = parseInt(timeValuesB[0]);
    const minutesB = parseInt(timeValuesB[1]);

    const timeA = new Date().setHours(hoursA, minutesA, 0);
    const timeB = new Date().setHours(hoursB, minutesB, 0);

    if (timeA > timeB) return 1;
    else if (timeA < timeB) return -1;
    else return 0;
  }
};
