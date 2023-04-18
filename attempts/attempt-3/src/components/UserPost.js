import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
export default function UserPost( {author, date, image, description} ) {

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar>
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