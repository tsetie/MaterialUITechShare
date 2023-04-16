import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import { CssBaseline } from '@mui/material';

export default function TopBar() {
  return (
    <>
        {/* CSSBaseline: MUI's version of a CSS reset, similar to Normalize.css
            to provide more styling consistency across browsers */}
        <CssBaseline/>
        {/* 1.) Header w/ Title, some icons */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    
                    {/* Logo button */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 1 }}
                    >
                        <InstagramIcon />
                    </IconButton>

                    {/* Header text */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Instagram-Mini
                    </Typography>
                
                    {/* Make post button */}
                    <IconButton color="inherit">
                        <SendIcon/>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    </>
  );
}
