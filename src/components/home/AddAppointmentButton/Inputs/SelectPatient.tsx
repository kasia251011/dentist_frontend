import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useGetPatientsQuery } from '../../../../feature/services/patientApi';

const SelectPatient = () => {
  const { data: patients } = useGetPatientsQuery();
  const { register } = useFormContext();

  return (
    <Box className="cell">
      <InputLabel className="label">Patient</InputLabel>
      <Select {...register('patientId')} defaultValue={patients?.[0]._id}>
        {patients?.map((patient) => (
          <MenuItem key={patient.name} value={patient._id}>
            {patient.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectPatient;
