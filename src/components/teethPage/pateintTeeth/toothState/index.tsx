import { Box, Typography } from '@mui/material';
// import TOOTH_IMG from '../../../../assets/tooth.svg';
import CAVITY_IMG from '../../../../assets/toothState/cavity.svg';
import CARIES_IMG from '../../../../assets/toothState/caries.svg';
import ARTIFICIAL_IMG from '../../../../assets/toothState/artificial.svg';
import SEAL_IMG from '../../../../assets/toothState/seal.svg';
import MILK_IMG from '../../../../assets/toothState/milk.svg';
import EXTRACTED_IMG from '../../../../assets/toothState/extracted.svg';
import TREATED_IMG from '../../../../assets/toothState/treated.svg';
import HEALTHY_IMG from '../../../../assets/toothState/healthy.svg';
import './style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Tooth, ToothState } from '../../../../feature/services/types/Patient';

const getToothImage = (state: ToothState) => {
  switch (state) {
    case 'CAVITY':
      return CAVITY_IMG;
    case 'CARIES':
      return CARIES_IMG;
    case 'ARTIFICIAL':
      return ARTIFICIAL_IMG;
    case 'SEAL':
      return SEAL_IMG;
    case 'MILK':
      return MILK_IMG;
    case 'EXTRACTED':
      return EXTRACTED_IMG;
    case 'TREATED':
      return TREATED_IMG;
    default:
      return HEALTHY_IMG;
  }
};

const ToothIcon = (tooth: Tooth) => {
  const { toothNo } = useParams<string>();
  const navigate = useNavigate();
  return (
    <Box
      className={`tooth ${toothNo === tooth.no.toString() ? 'tooth--selected' : ''}`}
      onClick={() => navigate(`${tooth.no}`)}>
      <Typography>{tooth.no}</Typography>
      <img src={getToothImage(tooth.state)} width={65} />
    </Box>
  );
};

export default ToothIcon;
