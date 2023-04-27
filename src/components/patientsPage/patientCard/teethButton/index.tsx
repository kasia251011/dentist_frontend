import { Card, CardActionArea, Typography } from '@mui/material';
import TOOTH_IMG from '../../../../assets/dental-care.png';
import { useNavigate } from 'react-router-dom';

const TeethButton = () => {
  const navigate = useNavigate();

  return (
    <Card className="tooth-btn">
      <CardActionArea className="container" onClick={() => navigate('teeth')}>
        <img src={TOOTH_IMG} />
        <Typography>Check out toothing and diagnosis</Typography>
      </CardActionArea>
    </Card>
  );
};

export default TeethButton;
