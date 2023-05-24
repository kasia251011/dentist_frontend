import { Box, Button, Typography } from '@mui/material';
import ImageViewer from 'react-simple-image-viewer';
import {
  GetPatientToothDiagnosisI,
  useGetPatientToothDiagnosisQuery
} from '../../../../feature/services/patientApi';
import { useParams } from 'react-router-dom';
import { getDate } from '../../../../utilities';
import { useState } from 'react';

const ToothDiagnosis = () => {
  const { id, toothNo, index } = useParams<string>();
  const getParams: GetPatientToothDiagnosisI = {
    id: id ?? '0',
    toothNo: parseInt(toothNo ?? '1'),
    index: parseInt(index ?? '0')
  };
  const { data: diagnosis } = useGetPatientToothDiagnosisQuery(getParams);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      <Box mt="10px" width={'600px'} mr="40px">
        <Typography variant="h3">Tooth diagnosis</Typography>
        <Typography mt="10px" color="GrayText" fontSize={'0.9rem'}>
          {getDate(diagnosis?.date)}
        </Typography>
        <Typography
          fontSize={'0.9rem'}
          mt="10px"
          mb="20px"
          height="110px"
          sx={{ overflowY: 'auto' }}>
          {diagnosis?.description && diagnosis?.description.length > 0 ? (
            diagnosis?.description
          ) : (
            <i>There is no description</i>
          )}
        </Typography>
        <Button onClick={() => setIsViewerOpen(true)} disabled={diagnosis?.src == null}>
          SEE X-RAY PHOTO
        </Button>
      </Box>
      {isViewerOpen && (
        <ImageViewer
          src={[diagnosis?.src ?? '']}
          currentIndex={0}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
};

export default ToothDiagnosis;
