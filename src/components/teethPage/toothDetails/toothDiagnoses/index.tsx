import { Typography, Box } from '@mui/material';
import DiagnosesCard from '../diagnosisCard';
import { Diagnosis } from '../../../../feature/services/types/Patient';
import './style.scss';
import AddToothDiagnosis from '../addToothDiagnosis';
import { useParams } from 'react-router-dom';

const ToothDiagnoses = ({ diagnoses }: { diagnoses: Diagnosis[] }) => {
  const { toothNo } = useParams<string>();
  return (
    <Box className="tooth-diagnoses-container">
      <Box className="header">
        <Typography variant="h6">History</Typography>
        <AddToothDiagnosis toothNo={parseInt(toothNo ?? '1')} />
      </Box>
      <Box className="diagnoses">
        {diagnoses.map((diagnosis, index) => (
          <DiagnosesCard key={index} {...diagnosis} />
        ))}
      </Box>
    </Box>
  );
};

export default ToothDiagnoses;
