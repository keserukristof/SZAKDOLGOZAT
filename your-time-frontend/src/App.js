import React from "react";
import { HashRouter as Router } from "react-router-dom";
import SecureRouter from "./components/authentication/SecureRouter";

const App = () => {
  return (
    <Router>
      <SecureRouter />
    </Router>
  );
};

export default App;
