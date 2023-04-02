interface Patient {
  id: number;
  avatar?: string;
  name: string;
  surname: string;
  pesel: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
}

export default Patient;
