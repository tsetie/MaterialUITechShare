// Generic React import
import * as React from 'react';

// MUI Prebuilt component imports
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import PersonIcon from '@mui/icons-material/Person';


// Bottom navigation bar for page layout
export default function BottomNavBar() {

    // Code that handles current page as highlighted in bottom navigation bar
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <div>
  
        {/* 4.) Bottom navigation bar w/ icons */}
        <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }} value={value} onChange={handleChange}>

            {/* Selectable icons */}
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                label="Search"
                value="search"
                icon={<SearchIcon />}
            />
            <BottomNavigationAction
                label="Reels"
                value="reels"
                icon={<SlideshowIcon />}
            />
            <BottomNavigationAction 
                label="Account" 
                value="account" 
                icon={<PersonIcon />} 
            />


        </BottomNavigation>
  
      </div>
    );
  }