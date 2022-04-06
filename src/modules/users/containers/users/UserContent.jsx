import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import UserItem from '../../components/useritem/UserItem';
import SpeedDial from '../../components/speeddial/SpeedDial';
import Filter from '../../components/filter/Filter';

const UserContent = () => {
  const { users } = useSelector((state) => state.users);
  const [displayData, setdispalyData] = useState([]);
  const [searchFilter, setsearchFilter] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setdispalyData(users);
  }, [users]);

  const handleChange = (e) => {
    const value = e.target.value;
    setsearchFilter(value);
    console.log(searchFilter);
    let displayItems = users.filter((user) =>
      user.name.toLowerCase().includes(value)
    );
    setdispalyData(displayItems);
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSortValue(value);
    console.log(sortValue);
    let sortedArr = [];
    if (value === 'asc') {
      console.log(sortValue, sortedArr, displayData);
      sortedArr = [...displayData].sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
      return setdispalyData(sortedArr);
    }

    if (value === 'desc') {
      sortedArr = [...displayData].sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      );
      console.log(sortedArr);
      return setdispalyData(sortedArr);
    }

    sortedArr = [...users];
    setdispalyData(sortedArr);
    console.log(sortedArr);
  };

  const handleClick = () => {
    setsearchFilter('');
    setSortValue('');
    setdispalyData(users);
  };

  return (
    <>
      <Filter
        search={searchFilter}
        handleChange={handleChange}
        sortValue={sortValue}
        handleSelectChange={handleSelectChange}
        open={open}
        myclose={handleClose}
        myopen={handleOpen}
        myclick={handleClick}
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
