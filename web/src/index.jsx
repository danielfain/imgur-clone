import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

ReactDOM.render(
  <Router>
    <div style={{ paddingLeft: '5vw', paddingRight: '5vw', paddingTop: '2vh', paddingBottom: '2vh' }}>
      <App />
    </div>
  </Router>,
  document.getElementById('root'),
);
