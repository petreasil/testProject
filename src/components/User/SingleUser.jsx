import Button from '@mui/material/Button';
import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@mui/material';


const SingleUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  const foundId = users?.find((user) => user.id === params.id);

  return (
    <>
      {!foundId ? (
        <>No user here</>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Grid item xs={10}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                title={foundId.name}
                subheader={foundId.email}
              />
              <CardMedia
                component="img"
                height="194"
                image={foundId.avatar}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium quidem quibusdam harum debitis, velit nesciunt sit
                  cum vel atque quam provident pariatur hic optio veniam,
                  laborum officia, accusamus expedita rerum animi iusto maxime
                  corrupti! Distinctio magni odit consequuntur debitis dicta
                  magnam ea corrupti deserunt fugit? Cumque magnam quod nisi
                  officia!
                </Typography>
                <Typography variant="body2">
                  Enroled to : {foundId.program}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  alignContent: 'center',
                }}
              >
                <Button variant="contained" size="small">
                  Like
                </Button>
                <Button variant="contained" size="small" onClick={()=> navigate(-1)}>
                  Back
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SingleUser;
