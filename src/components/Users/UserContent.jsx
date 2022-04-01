import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import UserItem from '../UserItem/UserItem';
import SpeedDial from '../SpeedDial/SpeedDial';
import Filter from '../Filter/Filter';


const UserContent = () => {
  const { users } = useSelector((state) => state.users);
  const [displayData, setdispalyData] = useState([]);
  const [searchFilter, setsearchFilter] = useState('');
  const [defaultValue, setdefaultValue] = useState('');
  const [open,setOpen] = useState(false)

  const handleOpen = ()=>{
    setOpen(true)
  }
  const handleClose = ()=>{
    setOpen(false)
  }

  useEffect(() => {
    setdispalyData(users);
  }, [users]);

  const handleChange = (e) => {
    setsearchFilter(e.target.value);
    console.log(searchFilter);
    let displayItems = users.filter((user) =>
      user.name.toLowerCase().includes(searchFilter)
    );
    setdispalyData(displayItems);
  };

  const handleSelectChange = (e) => {
    setdefaultValue(e.target.value);
   console.log(defaultValue)
    let sortedArr = []
    if(defaultValue === 'asc'){
      console.log(defaultValue,sortedArr,displayData)


      sortedArr= [...displayData].sort((a,b)=> a.name.toLowerCase()> b.name.toLowerCase() ? 1 : -1)
      setdispalyData(sortedArr)
    } else if (defaultValue === 'desc'){
      sortedArr = [...displayData].sort((a,b)=> a.name.toLowerCase()< b.name.toLowerCase() ? 1 : -1);
      setdispalyData(sortedArr)
      console.log(sortedArr)
    } else {
      sortedArr = users;
      setdispalyData(sortedArr)
      console.log(sortedArr)
    }
    
  };

  

  

  return (
    <>
      <Filter
        search={searchFilter}
        handleChange={handleChange}
        defaultValue={defaultValue}
        handleSelectChange={handleSelectChange}
        open={open}
        myclose={handleClose}
        myopen={handleOpen}
      />
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
