import { createTheme } from '@mui/material';
import { primary4, primary3, primary5 } from './constants';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      color: '#383838'
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.1rem',
      fontWeight: 600,
      marginBottom: '15px',
      color: '#08272B'
    }
  },
  palette: {
    primary: {
      light: '#D4F3F7',
      main: primary5,
      dark: primary4,
      contrastText: '#fff'
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#f6feff',
          borderRadius: '7px',
          padding: '0 5px',
          width: '100%',
          color: primary3,
          fontSize: '14px'
        }
      }
    }
  }
});

export default theme;
