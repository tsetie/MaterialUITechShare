import * as React from 'react';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, Avatar, Button, Typography, Stack, Container, Box, Paper } from '@mui/material';


function Header() {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1} m={1.5}>
        <Avatar></Avatar>
        <Typography variant="h6">Tseten</Typography>
      </Stack>
    </>

  );
}

function Content() {
  return (
    <>
      <Box sx={{ bgcolor: '#ebebeb', height: '45vh' }} />
    </>
  );
}

function ReactionPanel() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Stack m={1.5}>
        <FavoriteBorderIcon onClick={handleClick}></FavoriteBorderIcon>
        <Typography> {count} Likes</Typography>
      </Stack>
    </>

  );
}


// Userpost will be made up of 1. Name, profile pic 2. (New component) post content (status and/or image), 3. Like button & like count
export default function Userpost() {
  return (
    <>
      {/* card is the suface that holds everything */}

      <Paper elevation={0} >
        {/* Without stacking the content and reaction panel are next to eachother */}
          <Header></Header>
          <Content></Content>
          <ReactionPanel></ReactionPanel>
      </Paper>
    </>

  );
}