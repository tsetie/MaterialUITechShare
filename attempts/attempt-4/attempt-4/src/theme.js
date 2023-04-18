import { createTheme, responsiveFontSizes } from "@mui/material";

import { blue, purple, red, grey } from "@mui/material/colors";

// Make a
const theme = createTheme({
    palette: {
        primary: {
            light: blue[200],
            main:  blue[300],
            dark: '#002884',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
        },
    },

    // Can override all styles here
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    padding: '5px'
                }
            }
        }
    }
})

export default responsiveFontSizes(theme);