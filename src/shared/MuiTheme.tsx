import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: { main: '#4a4a4a' },
        secondary: { main: '#65aed5' },
    },
    typography: {
        fontFamily: ["Open Sans"].join(","),
    },
    components: {
        MuiIcon: {
            styleOverrides: {
                colorPrimary: "#65aed5",
                colorSecondary: "#FFF"
            }
        }
    }
});
