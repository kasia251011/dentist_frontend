import { ErrorMessage } from '@hookform/error-message';
import { Box, InputLabel, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useFormContext } from 'react-hook-form';

const InputDate = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <Box className="input">
      <InputLabel className="label">Date</InputLabel>
      <TextField
        size="small"
        type="date"
        sx={{ display: 'flex' }}
        {...register('date', { required: 'This input is required' })}
        defaultValue={dayjs().startOf('date').format('YYYY-MM-DD')}
      />
      <ErrorMessage
        errors={errors}
        name={`date`}
        render={({ message }) => <Typography variant="error">{message}</Typography>}
      />
    </Box>
  );
};

export default InputDate;
