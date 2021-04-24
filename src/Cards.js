import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Map from './Map'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 256,
    margin:30,
    height:310, 
  },
  
  media: {
    height: 140,
  },
  dark:{
    backgroundColor:"hsl(209, 23%, 22%)",
    color:"white",
  }
});


export default function MediaCard({i,input1,dmode}) {
  const classes = useStyles();

  return (
      <Link to={`/${i.name}`}>
    <Card className={`${classes.root} ${dmode && classes.dark} `}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={i.flag}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {i.name}
          </Typography>
          <Typography  variant="body2"  component="p">
            Population: {i.population}
          </Typography>
          <Typography variant="body2"  component="p">
            Region: {i.region}
          </Typography>
          <Typography variant="body2"  component="p">
             Capital : {i.capital}
          </Typography>
          {/* <Link to={`/${i.name}`}> */}
        </CardContent>
      </CardActionArea>
    </Card>
          </Link>
  );
}
