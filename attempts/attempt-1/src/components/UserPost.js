// React imports
import * as React from 'react';
import { useState } from 'react';

// Mui imports
import { Card, Avatar, Button, Typography, Stack, Container, Box, Paper, CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// Tell webpack this JS file uses these images

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
      <div>

        {/* MUI Card component acts as the main user post container */}
        <Card sx={{ maxWidth: '100%' }}>

            {/* 1.) User Post Header */}
            <CardHeader
                avatar={
                <Avatar aria-label="user">
                    
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreHorizIcon />  
                </IconButton>
                }
                title={author}      // Post author (who made it...)
                subheader={date}    // Post date (how many days ago...)
            />

            {/* User Post Picture/Content */}
            <CardMedia
                sx={{bgcolor: '#9999', minHeight: "45vh", maxWidth: "900px"}}
                component="img"
                image={imagePath}
                alt="User Post Image"
            />

            {/* Any user post interaction */}
            <CardActionArea>
                <ReactionPanel/>
                <Box sx={{m: 1}}>
                    <Typography variant="h8"> {description} </Typography>
                </Box>
          </CardActionArea>  

        </Card>
  
      </div>
    )
}
