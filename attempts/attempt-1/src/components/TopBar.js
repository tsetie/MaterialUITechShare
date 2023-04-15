// Generic React import
import * as React from 'react';

// MUI Prebuilt component imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

// Show inline styling:

// Top header for page layout
export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ color: '#000000', bgcolor: "#FFFFFF"}}>
        <Toolbar>

          {/* Home Icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <InstagramIcon />
          </IconButton>
          
          {/* Header title text */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photogram
          </Typography>
        
          {/* Right most button */}
          <IconButton color="inherit">
            <SendIcon/>
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
