import {
  Avatar,
  Box,
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
import { useGetPatientsQuery } from '../../../feature/services/patientApi';
import { getAge } from '../../../utilities';

const PatientsList = () => {
  const { data: patients } = useGetPatientsQuery();

  return (
    <Box>
      <Typography variant="h2">Your patients</Typography>
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
