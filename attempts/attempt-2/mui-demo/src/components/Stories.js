// Generic React import
import * as React from 'react';

// MUI Prebuilt component imports
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

// Style imports
import { styled } from '@mui/system';                           // Utility for creating styled components.
import { ThemeProvider, createTheme } from '@mui/material';     // Customize MUI with theme. Colors, the typography and much more.



// // 1.) Using styled components
// Don't have accees to sx prop!
const StyledAvatar = styled(Avatar)( () => ({
  sx: {
    bgcolor: 'red',
    height: '123',
    width: '50px'
  },
  width: '53px',
  height: '53px',
}));


// const MyStyledButton = styled('button')({
//   mx: 1, // ❌ don't use this! This shortcut is only provided by the `sx` prop
// });


// // 2.) Themed components
// // Style using MUI's create theme for a consistent
// // approach to styling across the application
// const storiesTheme = createTheme({
//   // Example of overwriting existing MUI component (from the prebuilt options)
//   components: {
//     MuiAvatar: {
//       styleOverrides: {
//         // Name of CSS rule (	Styles applied to the root element. )
//         root: {
//           // Some CSS to set dimensions of mui avatar
//           width:  '53px',
//           height: '53px',
//         },
//         // Name of CSS rule (Styles applied to Styles applied to the root element if variant="square". )
//         square: {
//            width: '100px'
//         }
//       },
//     },
//   },
// });

// Stories section of top header
export default function Stories() {

    return (
      <>

        {/* 2.) Social stories header */}
        {/* <ThemeProvider theme={storiesTheme}> */}
            <Stack spacing={{ xs: 2.5, sm: 3, md: 5 }} direction="row" m={1.5} display={'flex'} justifyContent={'center'}>
                <StyledAvatar alt="Story 1" />
                <StyledAvatar alt="Story 2" />
                <StyledAvatar alt="Story 3" />
                <StyledAvatar alt="Story 4" />
                <StyledAvatar alt="Story 5" />
            </Stack>
        {/* </ThemeProvider> */}
  
      </>
    );
  }