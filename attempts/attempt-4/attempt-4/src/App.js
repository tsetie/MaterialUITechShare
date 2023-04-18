

import { CssBaseline, Box, Container, Typography } from '@mui/material';

import TopBar from './components/TopBar';
import Stories from './components/Stories';
import BottomBar from './components/BottomBar';
import UserPostContainer from './components/UserPostContainer';

function App() {

  return (
    <>
      <CssBaseline/>

      {/* 1.) Top header */}
      <TopBar/>

      {/* 2.) Stories */}
      <Stories/>

      {/* 3.) Main scrollable section */}
      <UserPostContainer/>

      {/* 4.) Bottom navigation */}
      <BottomBar/>
      
    </>
  )
}

export default App;
