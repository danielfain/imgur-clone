import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

ReactDOM.render(
  <Router>
    <div style={{ paddingLeft: '7vw', paddingRight: '7vw', paddingTop: '2vw', paddingBottom: '2vw' }}>
      <App />
    </div>
  </Router>,
  document.getElementById('root'),
);
