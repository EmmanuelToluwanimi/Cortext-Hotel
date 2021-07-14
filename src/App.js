import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';

import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route exact to="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
