import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, purple, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            light: blue[200],
            main:  purple[300],
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              padding: 0,
            },
          },
        },
    }

});


export default responsiveFontSizes(theme);