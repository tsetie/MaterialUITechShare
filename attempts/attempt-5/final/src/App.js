import { BottomNavigation, Box, CssBaseline, Typography } from '@mui/material';
import * as React from 'react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import Stories from './components/Socials';


// import TopBar from './components/TopBar';
// import Stories from './components/Socials';
// import { BottomNavigation, CssBaseline } from '@mui/material';



function App() {
  return (
    <>
      <CssBaseline/>

      {/* Top Header */}
      <TopBar/>

      {/* Socials header section */}
      <Stories/>

      {/* Scrollable content of user posts */}
      

      {/* Bottom navigation */}
      <BottomBar/>

    </>
  );
}

export default App;


{/* <Box 
        sx={{
          height: '50vh',
          m: 1,
          p: 1,
          bgcolor: "#000055",
          color: '#FFFF',
          "&:hover": { bgcolor: 'red' }
        }}>
          <Typography variant="h5">
            Hello Box!
          </Typography>

      </Box>

      <div
        style={{
          height: '100vh',
          margin: '8px',
          padding: '8px',
          backgroundColor: "#000088",
          color: '#FFFF'
        }}
      >
          <p>Hello div!</p>
      </div> */}