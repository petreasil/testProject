import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProgram,
  edit,
  editProgram,
} from '../../slice/program/programSlice';
import { closeModal } from '../../slice/modal/modalSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalForm() {
  const [startsAt, setStartsAt] = useState(new Date());
  const [endsAt, setEndsAt] = useState(new Date());
  const [program, setProgram] = useState('');
  const dispatch = useDispatch();
  const { programToEdit } = useSelector((state) => state.programs);
  const { isOpen } = useSelector((state) => state.modal);

  const clearForm = () => {
    setProgram('');
    setStartsAt(new Date());
    setEndsAt(new Date());
  };

  useEffect(() => {
    if (programToEdit) {
      setProgram(programToEdit.name);
      setStartsAt(programToEdit.startsAt);
      setEndsAt(programToEdit.endsAt);
    }
  }, [programToEdit]);

  const onSubmit = (e) => {
    e.preventDefault();
    const pattern = 'MM/dd/yyyy hh/mm aaaaa\'m\'';
    const start = format(startsAt, pattern);
    const end = format(endsAt, pattern);

    if (programToEdit) {
      const { id } = programToEdit;
      const data = {
        id: Number(id),
        name: program,
        startsAt: start,
        endsAt: end,
      };
      console.log(id,data)
      dispatch(editProgram( data));
      const dismiss = () => dispatch(closeModal(false));
     dismiss();
      
    } else {
      const data = {
        name: program,
        startsAt: start,
        endsAt: end,
      };
      dispatch(createProgram(data));
      const dismiss = () => dispatch(closeModal(false));
      dismiss();
      console.log(data);
    }
  };
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => {
          dispatch(closeModal(false));
          dispatch(edit(undefined));
          clearForm();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate onSubmit={onSubmit}>
          <Typography component="h1" variant="h5" gutterBottom align="center">
            {!programToEdit ? 'Add Program' : 'Edit Program'}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="program"
                label="Program Name"
                name="program"
                autoComplete="text"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Start From"
                  value={startsAt}
                  onChange={(newValue) => setStartsAt(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="To"
                  value={endsAt}
                  onChange={(newValue) => setEndsAt(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {!programToEdit ? 'Add new Program' : 'Edit Program'}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
