import React from 'react';

import Home from './pages/Home';

import './static/styles/bootstrap-reboot.min.css';
import './static/styles/app.scss';

const App = () => {
  return (
    <center className='app container'>
      <Home />
    </center>
  );
};

export default App;
