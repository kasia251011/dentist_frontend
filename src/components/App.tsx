import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '../feature/store';
import router from '../router/router';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      color: '#383838'
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '24px'
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
      main: '#53CFDF',
      dark: '#104E56',
      contrastText: '#fff'
    }
  }
});

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
