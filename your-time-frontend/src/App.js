import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import AboutTheProgram from './pages/AboutTheProgram';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Notes from './pages/Notes';
import SignUp from './pages/SignUp';
import TimeTable from './pages/TimeTable';

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/time-table" component={TimeTable} />
        <Route path="/notes" component={Notes} />
        <Route path="/about-the-program" component={AboutTheProgram} />
        <Route path="/about-the-author" component={AboutMe} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Redirect to="/" />
      </Layout>
    </Router>
  );
};

export default App;
