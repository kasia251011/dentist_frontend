import { Box, Typography } from '@mui/material';
import './style.scss';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FaceIcon from '@mui/icons-material/Face';

const Summary = () => {
  return (
    <Box className="summary">
      <Box className="single">
        <div className="icon-label">
          <EventNoteIcon fontSize="medium" sx={{ color: 'white' }} />
        </div>
        <Box className="box">
          <Typography className="value">82</Typography>
          <Typography className="label">New appointments</Typography>
        </Box>
      </Box>
      <Box className="single">
        <div className="icon-label">
          <AttachMoneyIcon fontSize="medium" sx={{ color: 'white' }} />
        </div>
        <Box className="box">
          <Typography className="value">7000$</Typography>
          <Typography className="label">Earnings</Typography>
        </Box>
      </Box>
      <Box className="single">
        <div className="icon-label">
          <FaceIcon fontSize="medium" sx={{ color: 'white' }} />
        </div>
        <Box className="box">
          <Typography className="value">12</Typography>
          <Typography className="label">New patients</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Summary;
