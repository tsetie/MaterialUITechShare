// React imports
import * as React from 'react';
import { useState } from 'react';

// Mui imports
import { CssBaseline, Card, Avatar, Button, Typography, Stack, Container, Box, Paper, CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { red } from '@mui/material/colors';

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Function to handle raising like counter
function ReactionPanel() {
    return (
      <>
        <Stack m={1.5}>
          <LikeWidget/>
        </Stack>
      </>
  
    );
  }
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Small like widget to see if user has liked a post
function LikeWidget() {
    // Logic to handle user likes (toggle, increment, decrement)
    const [userLiked, setUserLiked] = useState(false);
    const [likes, setLikes] = useState(0);

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
export default function UserPost( {author, imagePath, date, description} ) {

  return (
    <>
      {/* CSSBaseline: MUI's version of a CSS reset, similar to Normalize.css
          to provide more styling consistency across browsers */}
      <CssBaseline/>
      <Card sx={{ maxWidth: "60vh", maxHeight: '100%' }}>
        
       

      </Card>
    </>
  );
}