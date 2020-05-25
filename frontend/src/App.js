import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { AuthContext } from './context/auth-contex';

import AboutMe from './pages/AboutMe';
import AboutTheProgram from './pages/AboutTheProgram';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Notes from './pages/Notes';
import SignUp from './pages/SignUp';
import TimeTable from './pages/TimeTable';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/time-table" component={TimeTable} />
        <Route path="/notes" component={Notes} />
        <Route path="/about-the-program" component={AboutTheProgram} />
        <Route path="/about-the-author" component={AboutMe} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-the-program" component={AboutTheProgram} />
        <Route path="/about-the-author" component={AboutMe} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Layout>{routes}</Layout>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
