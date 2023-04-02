import { Avatar, Box, Button, Typography } from '@mui/material';
import { useAddPatientMutation } from '../../../feature/services/patientApi';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputBase from '@mui/material/InputBase';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import './style.scss';
import Patient from '../../../feature/services/types/Patient';
import { primary5, primary11 } from '../../../theme/constants';
import { useAppDispatch } from '../../../feature/hooks';
import { setPatientId } from '../../../feature/currentSession/currentSessionSlice';

const AddPatientCard = () => {
  const dispatch = useAppDispatch();
  const [addPatient] = useAddPatientMutation();
  const { register, handleSubmit } = useForm<Patient>();

  const onSubmit: SubmitHandler<Patient> = (patient) => {
    addPatient(patient)
      .unwrap()
      .then((newPatient) => {
        dispatch(setPatientId(newPatient.id));
      });
  };
  return (
    <Box className="add-patient">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="form">
          <Avatar sx={{ width: 90, height: 90, backgroundColor: primary11 }}>
            <Person2RoundedIcon fontSize="large" htmlColor={primary5} />
          </Avatar>
          <Typography className="label">Name</Typography>
          <InputBase {...register('name', { required: true })} />
          <Typography className="label">Surname</Typography>
          <InputBase {...register('surname', { required: true })} />
          <Typography className="label">Pesel</Typography>
          <InputBase {...register('pesel', { required: true })} />
          <Typography className="label">Birth date</Typography>
          <InputBase type="date" {...register('dateOfBirth', { required: true })} />
          <Typography className="label">Email</Typography>
          <InputBase type="email" {...register('email', { required: true })} />
          <Typography className="label">Phone number</Typography>
          <InputBase {...register('phoneNumber', { required: true })} />
        </Box>
        <Button type="submit">ADD PATIENT</Button>
      </form>
    </Box>
  );
};

export default AddPatientCard;
