import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteProgram } from '../../store/program/programSlice';

const ProgramItem = (props) => {
  
  const dispatch = useDispatch()

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
        <TableCell align="center">{props.startsAt}</TableCell>
        <TableCell align="center">{props.endsAt}</TableCell>
        <TableCell align="center"  scope="row" sx={{ display: 'flex', height: '100%' }}>
          <IconButton aria-label="delete" onClick={()=> dispatch(deleteProgram(props.id))}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit">
            <EditIcon/>
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

ProgramItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  startsAt: PropTypes.string,
  endsAt: PropTypes.string
  
}

export default ProgramItem;
