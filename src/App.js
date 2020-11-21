import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js" 


const promise = loadStripe("pk_test_51HXunWA5IXPmM2LDAeD8LiaNZijKPYfRdb0lrWP2AlYiwNPbZ80Phr8TvwuHKvsWdhTRYuvyAgKjpGuw9f0Unf0M00cOD1t7Ts")


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will omly run once when the app component loads loads....

    auth.onAuthStateChanged((authUser) => {
      console.log("The User Is >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

        // the user just logged in or the user was logged out
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });

        //the user is logged out
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>


        <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
