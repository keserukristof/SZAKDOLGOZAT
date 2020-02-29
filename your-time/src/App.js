import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact />
          <Route path="/createTimeTable" />
          <Route path="/notes" />
          <Route path="/about" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
