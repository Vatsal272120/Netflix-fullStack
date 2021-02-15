import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Screens/Login/Login/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectuser } from "./features/userSlice";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

function App() {
  const user = useSelector(selectuser); // gets the user back
  const dispatch = useDispatch();

  // for persistence = to see if user is logged in and wont change the app if user is logged in
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((useAuth) => {
      if (useAuth) {
        //logged in

        // dispatchin the action of user logging in
        dispatch(
          login({
            uid: useAuth.uid,
            email: useAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });

    return unsub;
  }, []);

  // useEffect is dependent on the dispatch method - suppose to check the code and fire off

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
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
