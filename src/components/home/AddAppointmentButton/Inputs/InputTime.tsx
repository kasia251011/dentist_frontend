import { ErrorMessage } from '@hookform/error-message';
import { Box, InputLabel, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useFormContext } from 'react-hook-form';

const InputTime = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <Box className="cell">
      <InputLabel className="label">Time</InputLabel>
      <TextField
        size="small"
        sx={{ display: 'flex' }}
        type="time"
        {...register('time', { required: 'This input is required' })}
        defaultValue={dayjs().startOf('date').format('hh:mm')}
      />
      <ErrorMessage
        errors={errors}
        name={`time`}
        render={({ message }) => <Typography variant="error">{message}</Typography>}
      />
    </Box>
  );
};

export default InputTime;
