import './item.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Item = (props) => {
  const { id, name, color, img, } = props.productData;
  

  return (
<div className='item'>

    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="sox"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {color}
        </Typography>
      </CardContent>
      <CardActions>
     
     
     
      <Link to={`/item/${id}`}>
        <Button size="small">
          Details</Button>
          </Link>
  
      </CardActions>
    </Card>
    </div>
   
  ) 
};

export default Item;


    