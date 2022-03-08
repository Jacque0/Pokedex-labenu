import { createTheme } from '@mui/material/styles';
import { mainColors } from './colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: mainColors.yellow,
        },
        secondary: {
            main: mainColors.blue,
        },
        error: {
            main: mainColors.red,
        },
        success: {
            main: mainColors.blue,
        },
    },
}); 