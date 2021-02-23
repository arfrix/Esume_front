import React from 'react';
import * as sw from './sw';
import ReactDOM from 'react-dom';

import 'normalize.css';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
sw.register();