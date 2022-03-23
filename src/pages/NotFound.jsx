import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const NotFound = () => {
  return (
    <Container maxWidth="xl">
      <CssBaseline />

      <div>NotFound</div>
      <div>
        <Link to="/">Go Home</Link>
      </div>
    </Container>
  );
};

export default NotFound;
