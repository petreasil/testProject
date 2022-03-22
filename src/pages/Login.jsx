import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../store/auth/authSlice';
import { useSnackbar } from 'notistack';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { password, email } = formData;
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispach = useDispatch();
  const { user, isLoading, isSucess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(message, { variant: 'error', autoHideDuration: 2000 });
      //alert(message);
    }
    if (isSucess || user) {
      enqueueSnackbar('Login Success', {
        variant: 'success',
        autoHideDuration: 2000,
      });
      navigate('/');
    }
    dispach(reset());
  }, [user, isError, isSucess, message, dispach, navigate, enqueueSnackbar]);

  const onChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      enqueueSnackbar('Please provide email and password', {
        variant: 'success',
        autoHideDuration: 2000,
      });
    } else {
      const userData = {
        email,
        password,
      };
      dispach(login(userData));
    }
  };

  if (isLoading) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CircularProgress />
          </Box>
        </Grid>
      </Grid>
    );
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          Sports Center App
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={onChange}
                autoComplete="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {'Don\'t have an account? Register'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
