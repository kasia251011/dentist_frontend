import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { useGetPatientsQuery } from '../../../feature/services/patientApi';
import { getAge } from '../../../utilities';
import SERVER_ERROR_IMG from '../../../assets/500 Internal Server Error.svg';
import './style.scss';

const PatientsList = () => {
  const { data: patients, isError } = useGetPatientsQuery();

  if (isError) {
    return (
      <Box className="server-error">
        <img src={SERVER_ERROR_IMG} />
        <Typography>You are not connected to the server</Typography>
      </Box>
    );
  }

  return (
    <Box className="patients-list">
      <Box className="header">
        <Typography variant="h2">Your patients</Typography>
        <IconButton color="primary">
          <PersonAddRoundedIcon />
        </IconButton>
      </Box>
      <TableContainer component={Paper} sx={{ width: 650 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients?.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* TODO: Display user avatar */}
                  <Avatar sx={{ width: 30, height: 30, marginRight: '10px' }}>
                    <Person2RoundedIcon />
                  </Avatar>
                  {patient.name + ' ' + patient.surname}
                </TableCell>
                <TableCell>{getAge(patient.dateOfBirth) + ' yo'}</TableCell>
                <TableCell>{patient.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PatientsList;
