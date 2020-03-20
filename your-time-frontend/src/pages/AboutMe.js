import React from "react";
import CostumCard from "../components/CostumCard";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const AboutMe = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs>
        <CostumCard
          image={require("../images/me.jpg")}
          hover="A készítő"
          title="A készítő"
          description="Keserű Kristóf vagyok, harmadéves DE IK PTI hallgató. Ezt az alkalmazás a szakdolgozati projectem. Az alkalmazást Dr. Kuki Attila mentorálásával készítettem el"
        />
      </Grid>
      <Grid item xs>
        <Typography component="div">
          <Box textAlign="center" fontWeight={250} fontSize={40} m={1}>
            Magamról
          </Box>
          <Box textAlign="left" m={1}>
            Keserű Kristóf vagyok. Püspökladányban nőttem fel és itt is
            végeztem el a középiskolát és a Debreceni Egyetem Informatika
            karán folytattam tanulmányaimat Programtervező informatikus szakon.
            Leginkább a webfejlesztés vonz és jelenleg is próbálok naprakész
            tudást szerezni napjaink népszerűbb webtechnogiái terén.
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
