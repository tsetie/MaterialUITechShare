import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SlideshowIcon from '@mui/icons-material/Slideshow';

export default function BottomNavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <BottomNavigation value={value} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }} onChange={handleChange}>
      <BottomNavigationAction
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        value="search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        value="reels"
        icon={<SlideshowIcon />}
      />
      <BottomNavigationAction
        value="account"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}