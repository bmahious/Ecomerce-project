import React from 'react';
import HomePage from './pages/homepage/homePage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';


const HatsPage =() => (
  <div>
    <h1> Hats page Router </h1>
  </div>
)

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path='/'  component={HomePage} />
        <Route  path='/hats'  component={HatsPage} />
      </Switch>
        
    </div>
  );
}

export default App;
