import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { browserHistory } from 'react-router';

import routes from './routes';
import Root from './components/Root';

$(function() {
  ReactDOM.render(
    <Root browserHistory={browserHistory} routes={routes} />,
    document.getElementById('app')
  );
});
