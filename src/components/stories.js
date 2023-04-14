import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function Stories(){

  return(
    <>
      <Stack direction="row" spacing={2} m={1.5}>
        <Avatar alt="Remy Sharp" sx={{ width: 57, height: 57 }}/>
        <Avatar alt="Travis Howard" sx={{ width: 57, height: 57 }}/>
        <Avatar alt="Cindy Baker" sx={{ width: 57, height: 57 }}/>
        <Avatar alt="Remy Sharp"  sx={{ width: 57, height: 57 }}/>
        <Avatar alt="Travis Howard"  sx={{ width: 57, height: 57 }}/>
      </Stack>
      <Divider/>
    </>
  );
}