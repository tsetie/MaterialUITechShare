import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function TopBar() {
  return (
    <Box position="static" sx={{ bgcolor: '#FFFFFF', color: '#000000'}}>
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Instagram
        </Typography>
        <IconButton color="inherit"><SendIcon/></IconButton>
      </Toolbar>
    </Box>
  );
}