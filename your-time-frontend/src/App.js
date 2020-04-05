import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutTheProgram from "./pages/AboutTheProgram";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import TimeTable from "./pages/TimeTable";
import Notes from "./pages/Notes";

const App = () => {
  return (
    <Router>
      <Layout>
          <Route exact={true} path="/" component={Home} />
          <Route path="/time-table" component={TimeTable} />
          <Route path="/notes" component={Notes} />
          <Route path="/about-the-program" component={AboutTheProgram} />
          <Route path="/about-the-author" component={AboutMe} />
          <Redirect to="/" />
      </Layout>
    </Router>
  );
};

export default App;
