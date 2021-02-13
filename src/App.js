import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Screens/Login/Login";
import { auth } from "./firebase";

function App() {
  const user = null;

  // for persistence = to see if user is logged in and wont change the app if user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // user logged in
        console.log(user, "user is logged in ");
      } else {
        // logged out
      }
    });

    // detach the old user and attach a new user = useEffect clean up fn
    return unsubscribe;
  }, []);

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
