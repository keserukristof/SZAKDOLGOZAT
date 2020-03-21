import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, Grid } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
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

const NotesComponent = () => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MuiThemeProvider>
      <Grid container justify="space-around" className={classes.root}>
        <Grid item>
          <h1 className={classes.item}>Add note!</h1>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justify="space-around" className={classes.root}>
          <Grid item className={classes.item}>
            <Input
              name="name"
              inputRef={register}
              placeholder="Name"
            />
          </Grid>
          <Grid item className={classes.item}>
            <Input
              name="content"
              inputRef={register}
              placeholder="Content"
              multiline
            />
          </Grid>
          <Grid item className={classes.item}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </MuiThemeProvider>
  );
};

export default NotesComponent;