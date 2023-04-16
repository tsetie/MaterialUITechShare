// Generic React import
import * as React from 'react';

// MUI Prebuilt component imports
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

// Style imports
import styles from '../styles/Avatar.module.css'                // Relatively traditional CSS
import { ThemeProvider, createTheme } from '@mui/material';     //


// 1.) Themed components
// Style using MUI's create theme for a consistent
// approach to styling across the application
const storiesTheme = createTheme({
    // Example of overwriting existing MUI component (from the prebuilt options)
    components: {
      MuiAvatar: {
        styleOverrides: {
          // Name of CSS rule (	Styles applied to the root element. )
          root: {
            // Some CSS to set dimensions of mui avatar
            width:  '53px',
            height: '53px',
          },
          // Name of CSS rule (Styles applied to Styles applied to the root element if variant="square". )
          square: {
             width: '100px'
          }
        },
      },
    },
  });


// Stories section of top header
export default function Stories() {

    return (
      <>

        {/* 2.) Social stories header */}
        <ThemeProvider theme={storiesTheme}>
            <Stack spacing={{ xs: 2.5, sm: 6.5, md: 8 }} direction="row" m={1.5} display={'flex'} justifyContent={'center'}>
                <Avatar alt="Story 1" /> 
                <Avatar alt="Story 2" />
                <Avatar alt="Story 3" />
                <Avatar alt="Story 4" />
                <Avatar alt="Story 5" />
            </Stack>
        </ThemeProvider>
  
      </>
    );
  }