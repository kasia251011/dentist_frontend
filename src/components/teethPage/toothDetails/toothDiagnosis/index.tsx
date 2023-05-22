import { Box, Button, Typography } from '@mui/material';
import {
  GetPatientToothDiagnosisI,
  useGetPatientToothDiagnosisQuery
} from '../../../../feature/services/patientApi';
import { useParams } from 'react-router-dom';
import { getDate } from '../../../../utilities';

const ToothDiagnosis = () => {
  const { id, toothNo, index } = useParams<string>();
  const getParams: GetPatientToothDiagnosisI = {
    id: id ?? '0',
    toothNo: parseInt(toothNo ?? '1'),
    index: parseInt(index ?? '0')
  };
  const { data: diagnosis } = useGetPatientToothDiagnosisQuery(getParams);
  return (
    <Box mt="10px" width={'600px'} mr="40px">
      <Typography variant="h3">Tooth diagnosis</Typography>
      <Typography mt="10px" color="GrayText" fontSize={'0.9rem'}>
        {getDate(diagnosis?.date)}
      </Typography>
      <Typography fontSize={'0.9rem'} mt="10px" mb="20px" height="110px" sx={{ overflowY: 'auto' }}>
        {diagnosis?.description}
      </Typography>
      <Button>SEE X-RAY PHOTO</Button>
    </Box>
  );
};

export default ToothDiagnosis;
