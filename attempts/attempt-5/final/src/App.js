import { BottomNavigation, Box, CssBaseline, Typography } from '@mui/material';
import * as React from 'react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import Stories from './components/Socials';
import UserPostContainer from './components/UserPostContainer';


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
      <UserPostContainer/>

      {/* Bottom navigation */}
      <BottomBar/>

    </>
  );
}

export default App;