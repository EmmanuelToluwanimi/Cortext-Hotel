import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav/>
      </Router>
    </>
  );
}

export default App;
