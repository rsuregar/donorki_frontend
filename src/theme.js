import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ee5253',
      // main:'#fa8231',
    },
    secondary: {
      main: '#19857b',
    },
    whatsapp: {
      main: '#25D366',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f0f0f0',
    },
  },
});

export default theme;