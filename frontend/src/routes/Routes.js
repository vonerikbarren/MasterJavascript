import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import Theme from '../components/design/3-Theme/Theme';

import HomePage from '../pages/D-Defaults/D1-HomePage/HomePage/HomePage';
import BasicLanding1 from '../pages/A-Templates/1-LandingPages/01-BasicLanding-1/BasicLanding1';





export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/BasicLanding1" component={BasicLanding1} />

        </Switch>
      </Router>
    </ThemeProvider>

  );
}