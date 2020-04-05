import React from 'react';
import { Grid, Input, MuiThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
  const classes = useStyles();
  return (
    <MuiThemeProvider>
      <Grid container justify='space-around' className={classes.root}>
        <h1>Sign Up</h1>
      </Grid>
      <form>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Input type='text' name='fullname' placeholder='Full name' />
          </Grid>
        </Grid>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Input type='text' name='username' placeholder='Username' />
          </Grid>
        </Grid>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Input type='password' name='password' placeholder='Password' />
          </Grid>
        </Grid>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Input type='email' name='email' placeholder='E-mail' />
          </Grid>
        </Grid>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Button  type='submit' variant='contained' color='primary'>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </MuiThemeProvider>
  )
}

export default Login
