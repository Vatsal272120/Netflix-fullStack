import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
          <Route path='/test'>
            <h1>App is running ...</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
