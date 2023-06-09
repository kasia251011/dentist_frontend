import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import './style.scss';
import { useGetPatientTeethQuery } from '../../../feature/services/patientApi';
import { useEffect } from 'react';
import ToothIcon from './toothState';

const PatientTeeth = () => {
  const navigate = useNavigate();
  const { id: patientId } = useParams<string>();
  const { data: teeth } = useGetPatientTeethQuery(patientId ?? '');

  useEffect(() => {
    navigate('1');
  }, []);

  return (
    <Box className="patient-teeth">
      {teeth?.map((tooth) => (
        <ToothIcon key={tooth.no} {...tooth} />
      ))}
    </Box>
  );
};

export default PatientTeeth;
