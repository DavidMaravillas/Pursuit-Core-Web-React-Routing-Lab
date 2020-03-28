import React from 'react';
import NavBar from './components/NavBar'
import RanDog from "./components/RanDog"
import RanDogs from "./components/RanDogs"
import Home from "./components/Home"
import { Route, Switch } from "react-router-dom"
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch >
        <Route exact path={"/dog/random"} component={RanDog} />
        <Route path={"/dog/random/:num"} >
            <RanDogs/>
        </Route>
        <Route  exact path={"/"} >
            <Home/>
        </Route>
        <Route path="*" render={() => <div>Something Went Wrong</div>} />
      </Switch>
    </div>
  );
}

export default App;
