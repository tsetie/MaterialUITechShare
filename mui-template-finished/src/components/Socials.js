import * as React from 'react';

import { Avatar, CssBaseline, Stack } from '@mui/material';
import {styled} from '@mui/system';

// Styled components method 53 px
const StyledAvatar = styled(Avatar)( () => ({
    width: '53px',
    height: '53px',
}));

export default function Stories() {
  return (
    <>
      <CssBaseline/>

      {/* 2.) Social header */}
      <Stack 
        direction={'row'} 
        spacing={2} 
        sx={{display: 'flex', justifyContent: 'center', my: 2}}>
        <StyledAvatar/>
        <StyledAvatar/>
        <StyledAvatar/>
        <StyledAvatar/>
        <StyledAvatar/>
      </Stack>

    </>
  );
}
