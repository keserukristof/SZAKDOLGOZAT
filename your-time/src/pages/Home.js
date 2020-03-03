import React from "react";
import Grid from "@material-ui/core/Grid";

import CostumCard from "../components/CostumCard";

function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item xs>
      <CostumCard
        image={require("../images/time_table.jpg")}
        hover="Órarend tervező"
        title="Órarend tervező"
        description="Nézd meg bármikor az órarended és adj hozzá foglalkozásokat."
      />
      </Grid>
      <Grid item xs>
      <CostumCard
        image={require("../images/notes.jpg")}
        hover="Cetlik"
        title="Cetlik"
        description="Jegyezd fel a teendőidet, hogy soha ne felejts el semmit."
      />
      </Grid>
      <Grid item xs>
      <CostumCard
        image={require("../images/time_table.jpg")}
        hover="A programról"
        title="A programról"
        description="Nézd meg bármikor az órarended és adj hozzá foglalkozásokat."
      />
      </Grid>
      <Grid item xs>
      <CostumCard
        image={require("../images/time_table.jpg")}
        hover="A készítőről"
        title="A készítőről"
        description="Nézd meg bármikor az órarended és adj hozzá foglalkozásokat."
      />
      </Grid>
    </Grid>
  );
}

export default Home;
