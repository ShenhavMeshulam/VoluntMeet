import { createMuiTheme} from "@material-ui/core";

export default createMuiTheme({
    typography: {
        fontFamily: [
            'BlinkMacSystemFont',
            '"Segoe UI"'
        ].join(','),
    },
    palette: {
        primary:  {main: '#089dba'},
        secondary: {main: '#D7B2E1'}
    }
});