import React, {useContext} from 'react';

import { useSpring, animated } from 'react-spring';

import { useForm } from 'react-hook-form';

import {AuthContext} from '../context/auth-contex'

import { Grid, Input, MuiThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  item: {
    marginTop: 30,
    marginBottom: 30,
  },
}));

const Login = () => {
  const animation = useSpring({
    from: { marginLeft: -2300 },
    to: { marginLeft: 0 },
    config: { duration: 1000 },
  });

  const classes = useStyles();

  const auth = useContext(AuthContext)

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    auth.login();
  };

  return (
    <animated.div style={animation}>
      <MuiThemeProvider>
        <Grid container justify="space-around" className={classes.root}>
          <h1>Log in</h1>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container justify="space-around" className={classes.root}>
            <Grid item className={classes.item}>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                inputRef={register({ required: true })}
              />
              {errors.email && <p>This is required!</p>}
            </Grid>
          </Grid>
          <Grid container justify="space-around" className={classes.root}>
            <Grid item className={classes.item}>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                inputRef={register({ required: true, minLength: 6 })}
              />
              {errors.password && errors.password.type === 'required' && (
                <p>This is required!</p>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                <p>The min lenght is 6!</p>
              )}
            </Grid>
          </Grid>
          <Grid container justify="space-around" className={classes.root}>
            <Grid item className={classes.item}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </MuiThemeProvider>
    </animated.div>
  );
};

export default Login;