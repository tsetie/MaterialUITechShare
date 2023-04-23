import { Box, Typography } from '@mui/material';


export default function Basics() {
    return (
        <>
        <Box 
            sx={{
            height: '50vh',
            m: 1,
            p: 1,
            bgcolor: "#000055",
            color: '#FFFF',
            "&:hover": { bgcolor: 'red' }
            }}>
            <Typography variant="h5">
                Hello Box!
            </Typography>

        </Box>

        <div
            style={{
            height: '100vh',
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