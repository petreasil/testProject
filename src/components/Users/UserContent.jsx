import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import UserItem from '../UserItem/UserItem';

const UserContent = () => {
  const { users } = useSelector((state) => state.users);
  return (
    <>
      
        <Typography variant="body1" color="text.secondary" sx={{padding: '5px'}}>
          Active users: {users?.length}
        </Typography>

      <Grid container spacing={2}>
        {users.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </Grid>
    </>
  );
};

export default UserContent;
