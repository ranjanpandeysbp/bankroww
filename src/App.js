import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/common/header/index";
import AllBanks from "./components/all-banks/index";
import BankDetails from "./components/bank-details/index";
import { store } from "./reduxstore/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/all-banks" />
            </Route>
            <Route exact path="/all-banks">
              <AllBanks />
            </Route>
            <Route exact path="/bank-details">
              <BankDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
