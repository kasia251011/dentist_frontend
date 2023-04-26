import { TableRow, TableCell, Avatar } from '@mui/material';
import { primary11, primary5 } from '../../../theme/constants';
import Patient from '../../../feature/services/types/Patient';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { getAge } from '../../../utilities';
import { useNavigate } from 'react-router';

const PatientRow = ({ _id, name, surname, phoneNumber, dateOfBirth, avatar }: Patient) => {
  const navigate = useNavigate();
  return (
    <TableRow hover onClick={() => navigate(`${_id}`)}>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={avatar}
          sx={{ width: 30, height: 30, marginRight: '10px', backgroundColor: primary11 }}>
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
