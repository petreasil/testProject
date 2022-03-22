import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../../store/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  console.log(user);
  const onLogout = () => {
    dispatch(reset());
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sports Center App
          </Typography>

          {user ? (
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit">
                <Link href="/login" color="inherit" underline="none">
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                <Link href="/register" color="inherit" underline="none">
                  Register
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
