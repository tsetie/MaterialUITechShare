import { CssBaseline, Box, Container, Typography, Stack, Avatar } from '@mui/material';
import {styled} from '@mui/system';

export default function Stories() {

  // Style a MUI component w/ styled components
  const StyledAvatar = styled(Avatar)( () => ({
    width: '7vh',
    height: '7vh',
  }))

  return (
    <>
      <CssBaseline/>
      {/* 2.) Stories */}
      <Stack 
        direction="row" 
        spacing={{ xs: 2, }}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 2 },
        }}
      >
        <StyledAvatar/>
        <StyledAvatar/>
        <StyledAvatar/>
        <StyledAvatar/>
        <StyledAvatar/>
     
      </Stack>
            
    </>
  )
}
