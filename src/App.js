import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Screens/Login/Login";

function App() {
  const user = null;
  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
            <Route path='/test'>
              <h1>App is running ...</h1>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
