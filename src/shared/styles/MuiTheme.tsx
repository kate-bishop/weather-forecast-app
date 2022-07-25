import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: { main: '#4a4a4a' },
        secondary: { main: '#65aed5' },
        text:{
            primary: '#4a4a4a',
            secondary: '#65aed5',
        }
    },
    typography: {
        fontFamily: ["Open Sans"].join(","),
        h6: {
            fontWeight: 600,
            fontSize: '18px',
        },
        subtitle2: {
            fontWeight: 600,
        },
    },
    components: {
        MuiIcon: {
            styleOverrides: {
                colorPrimary: "#65aed5",
                colorSecondary: "#FFF"
            }
        }
    }
}));
