import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    marginTop: 30,
    marginBottom: 30
  },
  form: {
    maxWidth: 600,
    minWidth: 400,
    marginTop: 30,
    display: "none"
  },
  button: {
    margin: 50,
    width: 100
  }
});

function LoginAndReg() {
  const classes = useStyles();

  const [logInStyle, setLogInStyle] = React.useState("hidden");
  const [signUpStyle, setSignUpStyle] = React.useState("hidden");

  const handleLogInClick = () => {
    setLogInStyle("flex");
    setSignUpStyle("none");
  };

  const handleSignUpClick = () => {
    setLogInStyle("none");
    setSignUpStyle("flex");
  };

  return (
    <MuiThemeProvider>
      <Grid container justify="space-around">
        <h1>Log in or if you new sign up for the YourTime!</h1>
      </Grid>
      <Grid container justify="center">
        <Button
          className={classes.button}
          onClick={handleLogInClick}
          variant="contained"
          color="primary"
          value="logIn"
        >
          Log In
        </Button>
        <Button
          className={classes.button}
          onClick={handleSignUpClick}
          variant="contained"
          color="secondary"
          value="signUp"
        >
          Sing Up
        </Button>
      </Grid>
      <Grid container spacing={10} justify="space-around">
        <Grid
          item
          xs
          className={classes.form}
          style={{ display: `${logInStyle}` }}
        >
          <Paper>
            <Grid container justify="space-around">
              <h1>Log in</h1>
            </Grid>
            <form>
              <Grid container justify="space-around">
                <Input
                  className={classes.item}
                  required
                  placeholder="Username"
                  type="text"
                />
                <Input
                  className={classes.item}
                  required
                  placeholder="Password"
                  type="password"
                />
                <Input
                  className={classes.item}
                  required
                  placeholder="Email"
                  type="email"
                />
                <Grid container justify="space-around" className={classes.item}>
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid
          item
          xs
          className={classes.form}
          style={{ display: `${signUpStyle}` }}
        >
          <Paper>
            <Grid container justify="space-around">
              <h1>Sign up</h1>
            </Grid>
            <form>
              <Grid container justify="space-around">
                <Input
                  className={classes.item}
                  required
                  placeholder="Username"
                  type="text"
                />
                <Input
                  className={classes.item}
                  required
                  placeholder="Password"
                  type="password"
                />
                <Input
                  className={classes.item}
                  required
                  placeholder="Email"
                  type="email"
                />
                <Grid container justify="space-around" className={classes.item}>
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default LoginAndReg;
