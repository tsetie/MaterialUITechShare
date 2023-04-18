
import {
    AppBar,
    Toolbar, 
    Box,
    CssBaseline, 
    Container, 
    IconButton,
    Typography,
} from "@mui/material";

import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

export default function TopBar() {
  return (
    <>
      <CssBaseline/>

        {/* 1.) Header */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <InstagramIcon />
                </IconButton>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Instagram
                </Typography>
                
                <IconButton>
                    <SendIcon/>
                </IconButton>

                </Toolbar>
            </AppBar>
        </Box>

    </>
  );
}

