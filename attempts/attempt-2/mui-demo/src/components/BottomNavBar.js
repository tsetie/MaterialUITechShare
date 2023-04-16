// React imports
import * as React from 'react';

// Mui component imports
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

// Mui icon imports
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import PersonIcon from '@mui/icons-material/Person';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
        {/* CSSBaseline: MUI's version of a CSS reset, similar to Normalize.css
            to provide more styling consistency across browsers */}
        <CssBaseline/>
        <Box sx={{ pb: 7 }}>
        <CssBaseline />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
                
            {/* Home */}
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            {/* Search */}
            <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            {/* Reels */}
            <BottomNavigationAction label="Reels" icon={<SlideshowIcon />} />
            {/* Account */}
            <BottomNavigationAction label="Account" icon={<PersonIcon />} />
            
            </BottomNavigation>
        </Paper>
        </Box>
    </>
  );
}