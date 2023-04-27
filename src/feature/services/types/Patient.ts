interface Patient {
  _id: string;
  avatar?: string;
  name: string;
  surname: string;
  pesel: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
  teeth: Tooth[];
}

export interface Tooth {
  no: number;
  state: 'HEALTHY' | 'ILL';
  diagnoses: Diagnosis[];
}

export interface Diagnosis {
  date: Date;
  img?: string;
  description: string;
}

export default Patient;
