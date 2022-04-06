import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Form } from 'react-final-form';
import { TextField, makeValidate } from 'mui-rff';
import { useDispatch,useSelector } from 'react-redux';
import { createUser , editUser} from '../../slice/user/userSlice';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

export default function UserForm() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const prefiledData = useSelector(state=> state.formTest.form);
  console.log(prefiledData)


  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    avatar: yup.string().url().required(),
    program: yup.number().required().positive().integer(),
  });

  const validate = makeValidate(schema);

  // yes, this can even be async!
  async function onSubmit(values, form) {
    console.log(values)
    if(!prefiledData){
        dispatch(createUser(values));
        enqueueSnackbar('User Added', {
          variant: 'success',
          autoHideDuration: 2000,
        });
        navigate('/users');
        form.reset(); 
    } else {
    dispatch(editUser(values));
    enqueueSnackbar('User Edited', {
      variant: 'success',
      autoHideDuration: 2000,
    });
    navigate('/users');
    form.reset();

    }
    

  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={prefiledData}
      subscription={{ submitting: true, pristine: true}}
      render={({ handleSubmit, submitting, pristine }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AddAPhotoIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {prefiledData ? 'Edit User': 'Add new User'}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required={true}
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required={true}
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                autoComplete="user email"
              />
              <TextField
                margin="normal"
                required={true}
                fullWidth
                name="avatar"
                label="avatar"
                type="link"
                id="avatar"
                autoComplete="user avatar"
              />
              <TextField
                margin="normal"
                required={true}
                fullWidth
                name="program"
                label="program"
                type="number"
                id="program"
                autoComplete="user program"
                InputProps={{ inputProps: { min: 0 } }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || pristine}
              >
                {prefiledData ? 'Edit User' : 'Add new User'}
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    />
  );
}
