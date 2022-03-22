import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPrograms, reset } from '../store/program/programSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProgramItem from '../components/ProgramItem/ProgramItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { programs, isLoading, isError, message } = useSelector(
    (state) => state.programs
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/login');
    }
    dispatch(getPrograms());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  console.log(programs);
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom component="div">
        Welcome {user?.user.name} !
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Program</TableCell>
              <TableCell align="center">Calories</TableCell>
              <TableCell align="center">Fat</TableCell>
              <TableCell align="center">Carbs</TableCell>
              <TableCell align="center">Protein</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programs.data?.map((row, index) => (
              <ProgramItem key={index} {...row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
