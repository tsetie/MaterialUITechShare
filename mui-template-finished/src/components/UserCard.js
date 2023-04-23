import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function UserCard( {author, date, image, description} ) {

  return (
    <Card sx={{ maxWidth: {xs: '100%', sm: '75%', md: '50%' } }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {author[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={author}
        subheader={date}
      />
      
      <CardMedia
        component="img"
        image={image}
        alt="User post image"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
     
    </Card>
  );
}