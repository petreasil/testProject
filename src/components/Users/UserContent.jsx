import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import UserItem from '../UserItem/UserItem';
import SpeedDial from '../SpeedDial/SpeedDial';
import Filter from '../Filter/Filter'


const UserContent = () => {
  
  const {displayData}= useSelector(state=> state.users);
  console.log(displayData)
  return (
    <>
    <Filter/>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ padding: '5px' }}
      >
        Active users: {displayData?.length}
      </Typography>
      <SpeedDial />
      <Grid container spacing={2}>
        {displayData?.map((user) => (
 
          <UserItem key={user.id} {...user} />
    
        ))}
      </Grid>

    </>
  );
};

export default UserContent;
