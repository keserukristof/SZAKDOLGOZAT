import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Layout from "./components/layout/Layout";
import AboutTheProgram from "./pages/AboutTheProgram";
import Home from "./pages/Home"

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/time-table" />
          <Route path="/notes" />
          <Route path="/about-the-program" component={AboutTheProgram}/>
          <Route path="/about-the-author" />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
