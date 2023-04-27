import { Box, Typography } from '@mui/material';
import TOOTH_IMG from '../../../../assets/tooth.svg';
import './style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Tooth } from '../../../../feature/services/types/Patient';

const ToothState = (tooth: Tooth) => {
  const { toothNo } = useParams<string>();
  const navigate = useNavigate();
  return (
    <Box
      className={`tooth ${toothNo === tooth.no.toString() ? 'tooth--selected' : ''}`}
      onClick={() => navigate(`${tooth.no}`)}>
      <Typography>{tooth.no}</Typography>
      <img src={TOOTH_IMG} width={65} />
    </Box>
  );
};

export default ToothState;
