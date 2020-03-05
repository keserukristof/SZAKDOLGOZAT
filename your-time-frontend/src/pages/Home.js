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
            hover="Órarend tervező"
            title="Órarend tervező"
            description="Nézd meg bármikor az órarended és adj hozzá foglalkozásokat."
          />
        </Link>
      </Grid>
      <Grid item xs>
        <Link component={RouterLink} to="/notes" color="inherit">
          <CostumCard
            image={require("../images/notes.jpg")}
            hover="Cetlik"
            title="Cetlik"
            description="Jegyezd fel a teendőidet, hogy soha ne felejts el semmit."
          />
        </Link>
      </Grid>
      <Grid item xs>
        <Link component={RouterLink} to="/about-the-program" color="inherit">
          <CostumCard
            image={require("../images/code.jpg")}
            hover="A programról"
            title="A programról"
            description="Nézd meg a program GitHub oldalát."
          />
        </Link>
      </Grid>
      <Grid item xs>
        <Link component={RouterLink} to="/about-the-author">
          <CostumCard
            image={require("../images/myself.jpg")}
            hover="A készítőről"
            title="A készítőről"
            description="Tudj meg többet a készítőről."
          />
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;
