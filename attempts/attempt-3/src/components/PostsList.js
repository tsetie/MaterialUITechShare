import * as React from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import UserPost from './UserPost';


export default function PostsList() {
  return (
    <>
      <CssBaseline/>
      {/* Make a centered container */}
      <Container sx={{ 
        height: '100vh', 
        bgcolor: 'royalblue', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <UserPost/>
        
      </Container>

    </>
  );
}
