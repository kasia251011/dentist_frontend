import { Box, InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const InputDesc = () => {
  const { register } = useFormContext();

  return (
    <Box className="input">
      <InputLabel className="label">Description</InputLabel>
      <TextField
        size="small"
        minRows={5}
        maxRows={10}
        multiline
        sx={{ display: 'flex' }}
        {...register('description')}
        defaultValue={''}
      />
    </Box>
  );
};

export default InputDesc;
