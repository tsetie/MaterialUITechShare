import './styles/App.css';
import MainLayout from './components/MainLayout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// For wrapping styles in dark mode
const darkTheme = createTheme({
  palette: {
      mode: 'dark',
  },
}); 

// Main default app function
function App() {
  return (
    <div>
      {/* <ThemeProvider theme={darkTheme}> */}
        <CssBaseline />
        
        {/* Photogram layout */}
        <MainLayout/>
        
      {/* </ThemeProvider> */}
    

    </div>
  );
}

export default App;
