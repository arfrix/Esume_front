import rtl from 'jss-rtl';
import React from 'react';
import * as sw from './sw';
import { create } from 'jss';
import Routes from './routes';
import './assets/css/main.css';
import ReactDOM from 'react-dom';
import { faIR } from '@material-ui/core/locale';
import { orange } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'IRsans'
  },
  status: {
    danger: orange[500]
  }
}, faIR);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <StylesProvider jss={jss} >
        <Routes />
      </StylesProvider>
    </ThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
);
sw.register();