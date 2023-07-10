import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Bosses from './Bosses';
import Profile from './Profile';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Bosses</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Bosses} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
