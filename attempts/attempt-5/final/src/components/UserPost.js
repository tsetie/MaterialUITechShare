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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Tell webpack this JS file uses these images
import photographyImage from '../images/photographyPost.png';
import artImage from '../images/artPost.png';
import beeImage from '../images/beePost.png';
import timeImage from '../images/timePost.png';
import jaguarImage from '../images/jaguarPost.png';  

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Small like widget to see if user has liked a post
function LikeWidget() {
  // Logic to handle user likes (toggle, increment, decrement)
  const [userLiked, setUserLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
      setUserLiked(!userLiked);
      if (!userLiked) {
          setLikes(likes + 1);
      } else {
          setLikes(likes - 1);
      }
  }
  return (
      <>
          { (userLiked) ? <FavoriteIcon onClick={handleClick}/> : <FavoriteBorderIcon onClick={handleClick}/> }
          <Typography> {likes} Likes</Typography>
      </>
  )
}
// ----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------
// Userpost will be made up of 1. Name, profile pic 2. (New component) post content (status and/or image), 3. Like button & like count

export default function UserPost( { author, image, date, description } ) {

  return (
    <Card sx={{ maxWidth: 600, mt: {md: 5} }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt="User post image"
      />
      
      <CardContent>
        <LikeWidget/>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}