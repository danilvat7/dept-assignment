import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout className="main">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
