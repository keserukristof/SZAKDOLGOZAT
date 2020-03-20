import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import CostumCard from "../components/CostumCard";

function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <Link component={RouterLink} to="/time-table" color="inherit">
          <CostumCard
            image={require("../images/time_table.jpg")}
            hover="Timetable planner"
            title="Timetable planner"
            description="Check out your time table anytime and add activities."
          />
        </Link>
      </Grid>
      <Grid item xs>
        <Link component={RouterLink} to="/notes" color="inherit">
          <CostumCard
            image={require("../images/notes.jpg")}
            hover="Notes"
            title="Notes"
            description="Make a note of your to-do list so you never forget anything."
          />
        </Link>
      </Grid>
      <Grid item xs>
        <Link component={RouterLink} to="/about-the-program" color="inherit">
          <CostumCard
            image={require("../images/code.jpg")}
            hover="About the program"
            title="About the program"
            description="Learn more about the program."
          />
        </Link>
      </Grid>
      <Grid item xs>
        <Link component={RouterLink} to="/about-the-author">
          <CostumCard
            image={require("../images/myself.jpg")}
            hover="About the author"
            title="About the author"
            description="Learn more about the author."
          />
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;
