import * as React from 'react';


import TopBar from './components/TopBar';
import Stories from './components/Socials';
import { BottomNavigation, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline/>

      {/* 1.) Top header */}
      <TopBar/>
      
      {/* 2.) Social header */}
      <Stories/>

      {/* 3.) Scrollable content */}

      {/* Bottom navigation section */}
      <BottomNavigation/>

    </>
  );
}

export default App;
