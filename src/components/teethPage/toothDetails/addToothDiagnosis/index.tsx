import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import InputDate from './inputs/InputDate';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Diagnosis } from '../../../../feature/services/types/Patient';
import InputDesc from './inputs/InputDesc';
import './style.scss';
import {
  AddToothDiagnosisByPatientIdByToothNoI,
  useAddToothDiagnosisByPatientIdByToothNoMutation
} from '../../../../feature/services/patientApi';
import { useParams } from 'react-router-dom';
import { uploadFile } from './uploadFile';

const AddToothDiagnosis = ({ toothNo }: { toothNo: number }) => {
  const methods = useForm<Diagnosis>({
    defaultValues: {
      description: ''
    }
  });
  const { id: patientId } = useParams<string>();
  const [addDiagnosis] = useAddToothDiagnosisByPatientIdByToothNoMutation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit: SubmitHandler<Diagnosis> = (diagnosis) => {
    const patchParams: AddToothDiagnosisByPatientIdByToothNoI = {
      id: patientId ?? '1',
      toothNo: toothNo,
      diagnosis: diagnosis
    };

    if (diagnosis.files && diagnosis.files.length > 0) {
      uploadFile(diagnosis.files?.[0]).then((res: any) => {
        patchParams.diagnosis.src = res.url;
        addDiagnosis(patchParams);
        handleClose();
      });
    } else {
      addDiagnosis(patchParams);
      handleClose();
    }
  };
  const handleClose = () => {
    methods.reset();
    setOpen(false);
  };

  return (
    <>
      <Button variant="add" startIcon={<AddIcon />} onClick={handleClickOpen}>
        Add diagnose
      </Button>
      <Dialog className="add-tooth-diagnosis-dialog" open={open} onClose={handleClose}>
        <DialogTitle>Add new diagnosis for tooth no. {toothNo}</DialogTitle>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DialogContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center'
              }}>
              <InputDate />
              <InputDesc />
              <Button variant="outlined" sx={{ width: '150px' }} component="label">
                Upload image
                <input {...methods.register('files')} hidden accept="image/*" type="file" />
              </Button>
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

export default AddToothDiagnosis;
