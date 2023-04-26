import { Avatar, Card, IconButton, Typography } from '@mui/material';
import { Appointment } from '../../../feature/services/types/Appointment';
import { useGetPatientByIdQuery } from '../../../feature/services/patientApi';
import { useGetProcedureByIdQuery } from '../../../feature/services/procedureApi';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { primary5, primary11 } from '../../../theme/constants';
import DeleteIcon from '@mui/icons-material/Delete';

import './styles.scss';
import { useState } from 'react';
import { useDeleteAppointmenttByIdMutation } from '../../../feature/services/appointmentApi';

const AppointmentCard = ({ _id, time, procedureId, patientId }: Appointment) => {
  const { data: patient } = useGetPatientByIdQuery(patientId);
  const { data: procedure } = useGetProcedureByIdQuery(procedureId);
  const [deleteBtnVisible, setDeleteBtnVisible] = useState(false);
  const [deleteAppointment] = useDeleteAppointmenttByIdMutation();

  return (
    <Card
      className="appointment-card"
      onMouseOver={() => setDeleteBtnVisible(true)}
      onMouseLeave={() => setDeleteBtnVisible(false)}>
      <Typography className="time">{time}</Typography>
      <Typography className="procedure">{procedure?.name}</Typography>
      <Typography className="duration">Duration:{procedure?.duration}h</Typography>
      <Typography className="price">{procedure?.price}$</Typography>
      <Avatar src={patient?.avatar} className="avatar" sx={{ backgroundColor: primary11 }}>
        <Person2RoundedIcon fontSize="large" htmlColor={primary5} />
      </Avatar>
      <Typography className="patient field">{`${patient?.name} ${patient?.surname}`}</Typography>
      {deleteBtnVisible && (
        <IconButton className="delete-btn" size="small" onClick={() => deleteAppointment(_id)}>
          <DeleteIcon />
        </IconButton>
      )}
    </Card>
  );
};

export default AppointmentCard;
