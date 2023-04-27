import { Outlet, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import './style.scss';
import ToothDiagnoses from './toothDiagnoses';
import { useMemo } from 'react';
import { useGetPatientTeethQuery } from '../../../feature/services/patientApi';
import NO_DATA from '../../../assets/No data-pana.svg';
import AddToothDiagnosis from './addToothDiagnosis';

const ToothDetails = () => {
  const { id: patientId, toothNo } = useParams<string>();
  const { data: teeth } = useGetPatientTeethQuery(patientId ?? '');
  const tooth = useMemo(() => teeth?.find((t) => t.no === parseInt(toothNo ?? '1')), [toothNo]);

  console.log(tooth);

  return (
    <Box className="tooth-details">
      <Box className="header">
        <Typography className={`${tooth?.state.toLowerCase()} state`}>
          {tooth?.state.toLowerCase()}
        </Typography>
      </Box>
      <Box className="container">
        {tooth?.diagnoses.length === 0 ? (
          <Box className="no-data">
            <img src={NO_DATA} width={300} />
            <Typography mb={2}>There is no diagnoses. Add one!</Typography>
            <AddToothDiagnosis toothNo={tooth?.no} />
          </Box>
        ) : (
          <>
            <Outlet />
            <ToothDiagnoses diagnoses={tooth?.diagnoses ?? []} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default ToothDetails;
