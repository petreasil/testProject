import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteProgram, edit } from '../../store/program/programSlice';
import { openModal, closeModal } from '../../store/Modal/modalSlice';
import ModalForm from '../Forms/ModalForm';

const ProgramItem = (props) => {
  const { id, name, startsAt, endsAt } = props;

  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <>
      <TableRow
        key={id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="center">
          {id}
        </TableCell>
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">{startsAt}</TableCell>
        <TableCell align="center">{endsAt}</TableCell>
        <TableCell
          align="center"
          scope="row"
          sx={{ display: 'flex', height: '100%' }}
        >
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deleteProgram(id))}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="edit"
            onClick={() => {
              dispatch(edit({ id, name, startsAt, endsAt }));
              dispatch(openModal(true));
            }}
          >
            <EditIcon />
            
          </IconButton>
          <ModalForm
              open={isOpen}
              onClose={() => dispatch(closeModal(false))}
            />
        </TableCell>
      </TableRow>
    </>
  );
};

ProgramItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  startsAt: PropTypes.string,
  endsAt: PropTypes.string,
};

export default ProgramItem;
