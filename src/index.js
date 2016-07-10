import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/mixins.scss'
import './styles/main.scss'

require('./favicon.ico');


render(
  <Router routes={routes} history={browserHistory}/> , document.getElementById('app')
);
