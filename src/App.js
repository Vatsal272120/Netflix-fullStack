import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Screens/Login/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectuser } from "./features/userSlice";

function App() {
  const user = useSelector(selectuser); // gets the user back
  const dispatch = useDispatch();

  // for persistence = to see if user is logged in and wont change the app if user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user logged in
        console.log(userAuth, "user is logged in ");

        // dispatch the action of pushing the user into store
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out

        // dispatching the action of user getting logged out
        dispatch(logout);
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
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
