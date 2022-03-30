import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { add } from '../../store/FormSlice/formSlice';

const UserItem = (props) => {
  const { name, avatar, email, program, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataRecord = {
    name,
    id,
    email,
    program,
    avatar,
  }
  return (
    <>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={avatar}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enroled to program : {program}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email : {email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => dispatch(deleteUser(id))}>
              Delete
            </Button>
            <Button size="small"onClick={()=> {
              console.log(id,name,email,program);
              dispatch(add(dataRecord));
              navigate('/newuser');
            }}>Edit</Button>
            <Button size="small">More</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
UserItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
  program: PropTypes.any,
};
export default UserItem;
