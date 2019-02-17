import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    props: {
        MuiButtonBase: {

        }
    },
    palette: {
        primary: {
            light: '#52c7b8',
            main: '#009687',
            dark: '#00675b',
            contrastText: '#fff',
        },
        secondary: {
            light: '#c1d5e0',
            main: '#90a4ae',
            dark: '#62757f',
            contrastText: '#000',
        },
        background: {
            default: '#000',
            corner: ''
        }
    },
});

export default (theme);