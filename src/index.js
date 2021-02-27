import React from 'react';
import * as sw from './sw';
import ReactDOM from 'react-dom';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import 'normalize.css';
import Routes from './routes';

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <Routes />
    </ThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
);
sw.register();