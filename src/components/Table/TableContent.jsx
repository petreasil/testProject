import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../store/Modal/modalSlice';
import ModalForm from '../../components/Forms/ModalForm';
import ProgramItem from '../ProgramItem/ProgramItem';



const TableContent = () => {
  const { user } = useSelector((state) => state.auth);
  const { isOpen } = useSelector((state) => state.modal);
  const { programs } = useSelector((state) => state.programs);
  const dispatch = useDispatch();


  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Typography variant="h4" gutterBottom component="div">
            Welcome {user?.user.name} !
          </Typography>
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <TableContainer component={Paper}>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              component="div"
              sx={{ p: 2 }}
            >
              Active Programs
            </Typography>
            <Button
              variant="text"
              size="small"
              onClick={() => dispatch(openModal(true))}
            >
              Add new
            </Button>
            <ModalForm
              open={isOpen}
              onClose={() => dispatch(closeModal(false))}
            />
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Starts</TableCell>
                  <TableCell align="center">End</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {programs?.map((row, index) => (
                  <ProgramItem key={index} {...row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 240,
            }}
          >
            <Typography variant="body1" gutterBottom>
              Email: {user?.user.email}
            </Typography>

            <Button variant="outlined" size="medium">
              Add New
            </Button>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            Items
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default TableContent;
