import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from '../../store/user/userSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.users);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="search"
        value={searchValue}
        onChange={(e) => dispatch(searchFilter(e.target.value))}
        variant="standard"
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          variant="standard"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          label="Age"
          value=''
        >
          <MenuItem value=''>Ten</MenuItem>
          <MenuItem value=''>Twenty</MenuItem>
          <MenuItem value=''>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
