import React from 'react';
import { Grid, Input, MuiThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

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

const SignUp = () => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <MuiThemeProvider>
      <Grid container justify='space-around' className={classes.root}>
        <h1>Sign Up</h1>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Input
              type='text'
              name='fullname'
              placeholder='Full name'
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Input
              type='text'
              name='username'
              placeholder='Username'
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Input
              type='password'
              name='password'
              placeholder='Password'
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Input
              type='email'
              name='email'
              placeholder='E-mail'
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Grid container justify='space-around' className={classes.root}>
          <Grid item className={classes.item}>
            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </MuiThemeProvider>
  );
};

export default SignUp;
