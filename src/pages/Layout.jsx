import React from 'react';
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple,
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
