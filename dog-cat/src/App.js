import React from 'react';
import NavBar from './components/NavBar'
import RanDog from "./components/RanDog"
import { Route, Switch } from "react-router-dom"
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch >
        <Route path={"/dog/random"} component={RanDog} />
        <Route path="*" render={() => <div>Something Went Wrong</div>} />
      </Switch>
    </div>
  );
}

export default App;
