import './item.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Item = (props) => {
  const { id, name, price, color, img, size } = props.productData;
  

  return (
<div className='item'>

    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small">$ {price}</Button>
        <Button size="small">{size}</Button>
      </CardActions>
    </Card>
    </div>
   
  ) 
};

export default Item;


    