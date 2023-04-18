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
    <>
      {/* 1.) Top header */}
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <InstagramIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Instagram
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            // style={{marginRight: 16}}
            sx={{ mr: 2, ":hover": { bgcolor: 'maroon' } }}
          >
            <SendIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>


    </>
  );
}

