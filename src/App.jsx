import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

// Components
import DashboardLayout from './layouts/Dashboard'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path='*'>
          <DashboardLayout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
