import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
import { LinearProgress } from '@material-ui/core'
import Nav from './components/Nav';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<LinearProgress variant="indeterminate" color="secondary" />}>
          <Nav />
          <Switch>
            <Route exact to="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
