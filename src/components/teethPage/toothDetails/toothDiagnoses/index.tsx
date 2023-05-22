import { Typography, Box } from '@mui/material';
import DiagnosesCard from '../diagnosisCard';
import { Diagnosis } from '../../../../feature/services/types/Patient';
import './style.scss';
import AddToothDiagnosis from '../addToothDiagnosis';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ToothDiagnoses = ({ diagnoses }: { diagnoses: Diagnosis[] }) => {
  const { toothNo } = useParams<string>();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('0');
  }, []);

  return (
    <Box className="tooth-diagnoses-container">
      <Box className="header">
        <Typography variant="h3">History</Typography>
        <AddToothDiagnosis toothNo={parseInt(toothNo ?? '1')} />
      </Box>
      <Box className="diagnoses">
        {diagnoses.map((diagnosis, index) => (
          <DiagnosesCard key={index} diagnosis={diagnosis} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default ToothDiagnoses;
