import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sign_in from "./Sign_In";
import Admin from "./Admin";
import LoginForm from './LoginForm';
import Cards from "./Cards";
import Password__Reset from './Password__reset'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/Password__Reset">
            <Password__Reset/>
          </Route>
          <Route path="/">
            <LoginForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
