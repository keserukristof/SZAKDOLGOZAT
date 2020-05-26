import React, { useState, useCallback, useEffect } from 'react';
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

let logoutTimer;

const App = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState();

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    //actual date + 1h
    //tokenExpirationDate is a shadowed variable
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  let routes;

  if (token) {
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
        isLoggedIn: !!token,
        token: token,
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
