import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import TOOTH_IMG_EXAMPLE from '../../../../assets/subtle-prism.svg';
import { Diagnosis } from '../../../../feature/services/types/Patient';
import { getDate } from '../../../../utilities';
import { useNavigate, useParams } from 'react-router-dom';

const DiagnosesCard = ({ diagnosis, index }: { diagnosis: Diagnosis; index: number }) => {
  const navigate = useNavigate();
  const { index: diagnosisIndex } = useParams<string>();

  console.log(diagnosis.src);

  return (
    <Card sx={{ minWidth: '150px', maxWidth: '200px' }}>
      <CardActionArea onClick={() => navigate(`${index}`)}>
        <CardMedia component="img" height="120" image={diagnosis.src ?? TOOTH_IMG_EXAMPLE} />
        <CardContent
          className={`${
            parseInt(diagnosisIndex ?? '0') === index ? 'diagnosisCard--selected' : ''
          }`}>
          <Typography variant="body2" color="text.secondary">
            {getDate(diagnosis.date)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DiagnosesCard;
