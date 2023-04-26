import {
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
import { useGetPatientsQuery } from '../../../feature/services/patientApi';
import SERVER_ERROR_IMG from '../../../assets/500 Internal Server Error.svg';
import NO_DATA_IMG from '../../../assets/No data-pana.svg';
import './style.scss';
import PatientRow from './patientRow';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const PatientsList = () => {
  const { data: patients, isError, isSuccess } = useGetPatientsQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && patients.length > 0) {
      if (patients[0]._id) {
        navigate(patients[0]._id);
      }
    }
  }, [patients]);

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
      <TableContainer
        component={Paper}
        sx={{ minWidth: '550px', maxHeight: 595, borderRadius: '20px' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients?.length == 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center" sx={{ padding: '30px' }}>
                  <img className="no-data-error" src={NO_DATA_IMG} />
                  <Typography>There is no patient in your list! Add one</Typography>
                </TableCell>
              </TableRow>
            )}
            {patients?.map((patient, index) => (
              <PatientRow key={index} {...patient} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PatientsList;
