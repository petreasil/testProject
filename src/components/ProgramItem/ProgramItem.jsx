import React from 'react';
import PropTypes from 'prop-types'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ProgramItem = (props) => {
  return (
    <>
      <TableRow
        key={props.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="center">
          {props.id}
        </TableCell>
        <TableCell align="center">
          {props.name}
        </TableCell>
        <TableCell align="center">{props.year}</TableCell>
        <TableCell align="center">{props.color}</TableCell>
        <TableCell align="center">{props.pantone_value}</TableCell>
        <TableCell align="center">{props.year}</TableCell>
        <TableCell align="center">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

ProgramItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  year: PropTypes.number,
  color: PropTypes.string,
  pantone_value: PropTypes.string
}

export default ProgramItem;
