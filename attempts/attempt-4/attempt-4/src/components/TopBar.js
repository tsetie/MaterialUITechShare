import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1, pt: 7 }}>
      <AppBar position="fixed">
        <Toolbar>

        {/* Logo button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <InstagramIcon />
          </IconButton>

        {/* Text */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Instagram-Mini
          </Typography>

        {/* Send button */}
            <IconButton
                // style={{ hover... }} // doesn't seem to work :(
                sx={{ 
                    ":hover": { bgcolor: 'maroon'},
                }}
            >
                <SendIcon />
            </IconButton>


        </Toolbar>
      </AppBar>
    </Box>
  );
}