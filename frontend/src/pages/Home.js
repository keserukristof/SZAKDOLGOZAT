import React, { useContext } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import CostumCard from '../components/CostumCard';

import { AuthContext } from '../context/auth-contex';

function Home() {
  const auth = useContext(AuthContext);

  return (
    <React.Fragment>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Link
            component={RouterLink}
            to="/time-table"
            color="inherit"
            underline="none"
          >
            <CostumCard
              image={require('../images/time_table.jpg')}
              hover="Timetable planner"
              title="Timetable planner"
              description="Check out your time table anytime and add activities."
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link
            component={RouterLink}
            to="/notes"
            color="inherit"
            underline="none"
          >
            <CostumCard
              image={require('../images/notes.jpg')}
              hover="Todo notes"
              title="Todo notes"
              description="Make a note of your to-do list so you never forget anything."
            />
          </Link>
        </Grid>
      </Grid>
      {auth.isLoggedIn && (
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <Link
              component={RouterLink}
              to="/about-the-program"
              color="inherit"
              underline="none"
            >
              <CostumCard
                image={require('../images/code.jpg')}
                hover="About the program"
                title="About the program"
                description="Learn more about the program."
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link
              component={RouterLink}
              to="/about-the-author"
              color="inherit"
              underline="none"
            >
              <CostumCard
                image={require('../images/myself.jpg')}
                hover="About the author"
                title="About the author"
                description="Learn more about the author."
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
              onClick={auth.logout}
            >
              <CostumCard
                image={require('../images/exit.jpg')}
                hover="Log out"
                title="Log out"
                description="Thank you for using our website! We are waiting for you back!."
              />
            </Link>
          </Grid>
        </Grid>
      )}
      {!auth.isLoggedIn && (
        <React.Fragment>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Link
                component={RouterLink}
                to="/about-the-program"
                color="inherit"
                underline="none"
              >
                <CostumCard
                  image={require('../images/code.jpg')}
                  hover="About the program"
                  title="About the program"
                  description="Learn more about the program."
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link
                component={RouterLink}
                to="/about-the-author"
                color="inherit"
                underline="none"
              >
                <CostumCard
                  image={require('../images/myself.jpg')}
                  hover="About the author"
                  title="About the author"
                  description="Learn more about the author."
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Link
                component={RouterLink}
                to="/sign-up"
                color="inherit"
                underline="none"
              >
                <CostumCard
                  image={require('../images/welcome.jpg')}
                  hover="Sign up"
                  title="Sign up"
                  description="Register on our website! You will not regret it!"
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link
                component={RouterLink}
                to="/login"
                color="inherit"
                underline="none"
              >
                <CostumCard
                  image={require('../images/login.jpg')}
                  hover="Log in"
                  title="Log in"
                  description="Log in to your existing account!"
                />
              </Link>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Home;
