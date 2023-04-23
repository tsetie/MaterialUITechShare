import { Box, Typography } from '@mui/material';


export default function Basics() {
    return (
        <>
        <Box 
            sx={{
                height: '46vh',
                m: 1,
                p: 1,
                bgcolor: "#000055",
                color: '#FFFF',
                "&:hover": { bgcolor: 'red' }
            }}>
            <Typography variant="h6">
                Hello Box!
            </Typography>

        </Box>

        <div
            style={{
            height: '46vh',
            margin: '8px',
            padding: '8px',
            backgroundColor: "#000088",
            color: '#FFFF'
            }}
        >
            <p>Hello div!</p>
        </div> 
      </>
    )
}