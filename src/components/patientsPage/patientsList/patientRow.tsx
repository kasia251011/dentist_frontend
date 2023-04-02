import { TableRow, TableCell, Avatar } from '@mui/material';
import { setPatientId } from '../../../feature/currentSession/currentSessionSlice';
import { primary11, primary5 } from '../../../theme/constants';
import Patient from '../../../feature/services/types/Patient';
import { useAppDispatch } from '../../../feature/hooks';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { getAge } from '../../../utilities';

const PatientRow = ({ id, name, surname, phoneNumber, dateOfBirth }: Patient) => {
  const dispatch = useAppDispatch();
  return (
    <TableRow hover onClick={() => dispatch(setPatientId(id))}>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 30, height: 30, marginRight: '10px', backgroundColor: primary11 }}>
          <Person2RoundedIcon htmlColor={primary5} />
        </Avatar>
        {name + ' ' + surname}
      </TableCell>
      <TableCell>{getAge(dateOfBirth) + ' yo'}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
    </TableRow>
  );
};

export default PatientRow;
