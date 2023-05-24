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
  state: ToothState;
  diagnoses: Diagnosis[];
}

export interface Diagnosis {
  date: Date;
  src?: string;
  description: string;
  files?: File[];
}

export type ToothState =
  | 'HEALTHY'
  | 'CARIES'
  | 'ARTIFICIAL'
  | 'SEAL'
  | 'CAVITY'
  | 'MILK'
  | 'EXTRACTED'
  | 'TREATED';

export default Patient;
