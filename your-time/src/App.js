import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Nav from "./components/Nav";
import AboutTheProgram from "./pages/AboutTheProgram";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route path="/" exact />
            <Route path="/time-table" />
            <Route path="/notes" />
            <Route path="/about-the-program" />
            <Route path="/about-the-author" />
            <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
