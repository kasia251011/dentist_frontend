import { Avatar, Box, Typography } from '@mui/material';
import Patient from '../../../../feature/services/types/Patient';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import './style.scss';
import avatar from '../../../../assets/avatar.jpg';

const PatientDetails = ({ patient }: { patient: Patient | undefined }) => {
  const getDate = (date: Date | undefined) => {
    return date ? new Date(date).toLocaleString() : '';
  };

  return (
    <Box className="patient-details">
      {/* TODO: get patient avatar */}
      <Avatar sx={{ width: 100, height: 100, marginBottom: '10px' }} src={avatar}>
        <Person2RoundedIcon />
      </Avatar>
      <Typography className="label">Name</Typography>
      <Typography className="text">{patient?.name}</Typography>
      <Typography className="label">Surname</Typography>
      <Typography className="text">{patient?.surname}</Typography>
      <Typography className="label">Pesel</Typography>
      <Typography className="text">{patient?.pesel}</Typography>
      <Typography className="label">Birth date</Typography>
      <Typography className="text">{getDate(patient?.dateOfBirth)}</Typography>
      <Typography className="label">Email</Typography>
      {/* TODO: get patient email */}
      <Typography className="text">mock@email.com</Typography>
      <Typography className="label">Phone number</Typography>
      <Typography className="text">{patient?.phoneNumber}</Typography>
    </Box>
  );
};

export default PatientDetails;
