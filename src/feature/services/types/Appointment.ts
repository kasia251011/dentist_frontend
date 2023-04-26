export interface Appointment {
  _id: string;
  /**
   * Format: DD/MM/YY
   */
  date: string;
  /**
   * Format: HH-MM
   */
  time: string;
  patientId: string;
  procedureId: string;
}
