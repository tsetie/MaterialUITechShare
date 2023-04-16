import * as React from 'react';

import TopBar from './TopBar';
import Stories from './Stories';
import BottomNavBar from './BottomNavBar';
import UserPostsList from './PostsList';

import CssBaseline from '@mui/material/CssBaseline';

export default function MainLayout() {
    return (
      <div>
        {/* 
            CSSBaseline: MUI's version of a CSS reset, similar to Normalize.css
            to provide more styling consistency across browsers
        */}
        <CssBaseline />

        {/* 1.) Top header */}
        <TopBar/>

        {/* 2.) Social stories header */}
        <Stories/>

        {/* 3.) List of scrollable card posts */}
        <UserPostsList/>
  
        {/* 4.) Bottom navigation bar w/ icons */}
        <BottomNavBar/>
  
      </div>
    );
  }