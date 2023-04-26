import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useGetProceduresQuery } from '../../../../feature/services/procedureApi';

const SelectProcedure = () => {
  const { register } = useFormContext();
  const { data: procedures } = useGetProceduresQuery();

  return (
    <Box className="cell">
      <InputLabel className="label">Procedure</InputLabel>
      <Select {...register('procedureId')} defaultValue={procedures?.[0]._id}>
        {procedures?.map((procedure) => (
          <MenuItem key={procedure.name} value={procedure._id}>
            {procedure.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectProcedure;
