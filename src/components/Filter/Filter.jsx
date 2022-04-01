import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const {
    search,
    handleChange,
    defaultValue,
    handleSelectChange,
    open,
    myopen,
    myclose,
  } = props;

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
        value={search}
        onChange={handleChange}
        variant="standard"
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          variant="standard"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sort"
          value={defaultValue}
          onChange={handleSelectChange}
          open={open}
          onClose={myclose}
          onOpen={myopen}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="asc">Asc</MenuItem>
          <MenuItem value="desc">Desc</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
Filter.propTypes = {
  search: PropTypes.string,
  handleChange: PropTypes.func,
  defaultValue: PropTypes.string,
  handleSelectChange: PropTypes.func,
  open: PropTypes.any,
  myclose: PropTypes.func,
  myopen: PropTypes.func,
};
export default Filter;
