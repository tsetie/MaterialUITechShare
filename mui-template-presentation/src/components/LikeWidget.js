import * as React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography } from '@mui/material';

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Small like widget to see if user has liked a post
export default function LikeWidget() {
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
  