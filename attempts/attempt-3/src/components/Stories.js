import * as React from 'react';

import { 
    Avatar,
    Stack,
    CssBaseline, 
} from "@mui/material";

// Style using 'styled components' method
import { styled } from '@mui/system';   // Utility for creating styled components.

const StyledAvatar = styled(Avatar)( () => ( {
    width: '53px',
    height: '53px',
}))


export default function Stories() {
return (
    <>
    <CssBaseline/>

        {/* 2.) Socials container */}
        <Stack direction="row" spacing={{ xs: 2.5, sm: 7, md: 10 }} sx={{ m: 1, display: 'flex', justifyContent: 'center'}}>
            <StyledAvatar/>
            <StyledAvatar/>
            <StyledAvatar/>
            <StyledAvatar/>
            <StyledAvatar/>
        </Stack>
    </>
);
}
