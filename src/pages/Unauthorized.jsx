import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Grid container>
      <Typography component="h1" variant="h4">
        Unauthorized
      </Typography>
      <Typography component="h1" variant="h4">
        You do not have access to the requested page.
      </Typography>
      <Button variant="contained" onClick={goBack}>
        Go Back
      </Button>
    </Grid>
  );
};

export default Unauthorized;
