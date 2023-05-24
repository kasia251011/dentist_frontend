import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { ReactNode, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import './styles.scss';
import { useAddAppointmentMutation } from '../../../feature/services/appointmentApi';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Appointment } from '../../../feature/services/types/Appointment';
import InputDate from './Inputs/InputDate';
import InputTime from './Inputs/InputTime';
import { useGetPatientsQuery } from '../../../feature/services/patientApi';
import { useGetProceduresQuery } from '../../../feature/services/procedureApi';
import { Procedure } from '../../../feature/services/types/Procedure';

const AddAppointmentButton = () => {
  const [addAppointment] = useAddAppointmentMutation();
  const { data: patients } = useGetPatientsQuery();
  const { data: procedures } = useGetProceduresQuery();
  const methods = useForm<Appointment>();
  const [open, setOpen] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | undefined>(
    procedures?.[0]
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit: SubmitHandler<Appointment> = (appointment) => {
    addAppointment(appointment);
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  //TODO: Assign on change!
  // eslint-disable-next-line no-unused-vars
  const handleChangeProcedure = (event: SelectChangeEvent<string>, child: ReactNode) => {
    const id = event.target.value;
    const procedure = procedures?.find((procedure) => procedure._id === id);
    setSelectedProcedure(procedure);
  };

  // useEffect(() => {
  //   setSelectedProcedure(procedures?.[0]);
  // }, [procedures]);

  return (
    <>
      <Button variant="add" startIcon={<AddIcon />} onClick={handleClickOpen}>
        Add appointment
      </Button>
      <Dialog open={open} onClose={handleClose} className="add-appointment-dialog">
        <DialogTitle>Add new appointment</DialogTitle>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DialogContent>
              <Box className="row">
                <InputDate />
                <InputTime />
              </Box>
              <Box className="row">
                <Box className="cell">
                  <InputLabel className="label">Procedure</InputLabel>
                  <Select
                    size="small"
                    {...methods.register('procedureId')}
                    defaultValue={procedures?.[0]._id}>
                    {procedures?.map((procedure) => (
                      <MenuItem key={procedure.name} value={procedure._id}>
                        {procedure.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box className="cell">
                  <InputLabel className="label">Patient</InputLabel>
                  <Select
                    size="small"
                    {...methods.register('patientId')}
                    defaultValue={patients?.[0]._id}>
                    {patients?.map((patient) => (
                      <MenuItem key={patient.name} value={patient._id}>
                        {patient.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
              <Card className="procedure-card">
                <CardContent>
                  <Typography variant="h3">{selectedProcedure?.name}</Typography>
                  <Typography>Price: {selectedProcedure?.price} $</Typography>
                  <Typography>Duraton: {selectedProcedure?.duration} h</Typography>
                </CardContent>
              </Card>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" type="submit">
                Add
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </>
  );
};

export default AddAppointmentButton;
