interface Patient {
  id: number;
  avatar?: string;
  name: string;
  surname: string;
  pesel: string;
  dateOfBirth: Date;
  phoneNumber: string;
}

export default Patient;
