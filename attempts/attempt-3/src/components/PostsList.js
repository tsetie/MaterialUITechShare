import * as React from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import UserPost from './UserPost';


export default function PostsList() {
  return (
    <>
      <CssBaseline/>
      {/* Make a centered container */}
      {/* 3.) Scrollable content w/ images, likes, text description */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >

        <UserPost/>
        
      </Box>

    </>
  );
}
