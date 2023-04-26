/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material';
import { primary4, primary3, primary5 } from './constants';
import { CSSProperties } from 'react';

declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    add: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    error: CSSProperties;
  }

  interface TypographyVariantsOptions {
    error?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      color: '#383838'
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 500
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
    },
    error: {
      fontFamily: 'Poppins',
      fontSize: '0.6rem',
      color: 'red'
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
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'none'
        }
      },
      variants: [
        {
          props: { variant: 'add' },
          style: {
            backgroundColor: primary5,
            '&:hover': {
              background: primary4
            },
            color: 'white',
            borderRadius: '20px',
            textTransform: 'none'
          }
        }
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px',
          '&:last-child': {
            paddingBottom: '16px'
          }
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          margin: '10px'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          borderRadius: '20px'
        },
        paper: {
          borderRadius: '10px'
        }
      }
    }
  }
});

export default theme;
