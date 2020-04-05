import React from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import Layout from "../layout/Layout";
import AboutTheProgram from "../../pages/AboutTheProgram";
import Home from "../../pages/Home";
import AboutMe from "../../pages/AboutMe";
import TimeTable from "../../pages/TimeTable";
import Notes from "../../pages/Notes";
import Login from "./LoginForm";

const SecureRouter = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push("/login");
  };

  return (
    <Security
      issuer="https://dev-513675.okta.com/oauth2/default"
      clientId="0oa4yteffFxkEW6SR4x6"
      redirectUri={window.location.origin + "/implicit/callback"}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <Layout>
          <Route exact={true} path="/" component={Home} />
          <SecureRoute path="/time-table" component={TimeTable} />
          <SecureRoute path="/notes" component={Notes} />
          <Route path="/about-the-program" component={AboutTheProgram} />
          <Route path="/about-the-author" component={AboutMe} />
          <Route
            path="/login"
            render={() => <Login baseUrl="https://dev-513675.okta.com" />}
          />
          <Route path="/implicit/callback" component={LoginCallback} />
          <Redirect to="/" />
      </Layout>
    </Security>
  );
};
export default SecureRouter;
