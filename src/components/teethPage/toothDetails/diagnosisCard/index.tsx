import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import TOOTH_IMG_EXAMPLE from '../../../../assets/tooth-photo-example.jpg';
import { Diagnosis } from '../../../../feature/services/types/Patient';
import { getDate } from '../../../../utilities';

const DiagnosesCard = (diagnosis: Diagnosis) => {
  return (
    <Card sx={{ maxWidth: 60 }}>
      <CardActionArea>
        <CardMedia component="img" height="40" image={TOOTH_IMG_EXAMPLE} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {getDate(diagnosis.date)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DiagnosesCard;
