import { Avatar, Box, Typography } from '@mui/material';
import Patient from '../../../../feature/services/types/Patient';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import './style.scss';
import { primary5, primary11 } from '../../../../theme/constants';

const getDate = (date: Date | undefined) => {
  return date ? new Date(date).toLocaleString() : '';
};

const PatientDetails = ({ patient }: { patient: Patient | undefined }) => {
  return (
    <Box className="patient-details">
      <Avatar
        src={patient?.avatar}
        sx={{ width: 90, height: 90, marginBottom: '10px', backgroundColor: primary11 }}>
        <Person2RoundedIcon fontSize="large" htmlColor={primary5} />
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
      <Typography className="text">{patient?.email}</Typography>
      <Typography className="label">Phone number</Typography>
      <Typography className="text">{patient?.phoneNumber}</Typography>
    </Box>
  );
};

export default PatientDetails;
