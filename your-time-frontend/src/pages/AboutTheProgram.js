import React from "react";

import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const AboutTheProgram = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs>
        <Typography component="div">
          <Box textAlign="center" fontWeight={250} fontSize={40} m={1}>
            A programról
          </Box>
          <Box textAlign="left" m={1}>
            Harmadéves DI IK PTI hallgatóként elérkeztem tanulmányaim azon szakaszába
            ahol szakdolgozati témát kellett választanom. A hosszas listát áttekintve
            Dr. Kuki Attila Tanárúr által meghidetett "Kliens-szerver architektúrájú (webes) alkalmazásfejlesztés"
            téma tűnt számomra a legideálisabbnak.
          </Box>
          <Box textAlign="left" m={1}>
            Ez a webalkalmazás lehetőséget nyújt általános -és középiskolás diákok számára
            ,hogy egy helyen elérjék az órarendjüket, szerkeszthesség azt illetve iskola
            utáni foglalkozásokat is hozzáadjanak. 
          </Box>
          <Box textAlign="left" m={1}>
            A "Cetlik" funkció használatával a diákok "feladatokat", "megjegyzéseket" tűzhetnek fel
            maguknak és miután a "cetli" már nem aktuális eltávolíthatják azt.
          </Box>
          <Box textAlign="left" m={1}>
            Sok időt fordítottam arra, hogy megtaláljam azokat a moder webtechnológiákat amik
            segítségével könnyedén megvalósíthatom azokat a célkitűzéseket amiket elterveztem a
            projekt tervezési szakaszában. Kliens oldalon HTML5, CSS3, JavaScript technológiákat
            használtam, illetve segítségül hívtam a React nevű JavaScript libraryt, továbbá a
            weblap kinézetéért felelős Material UI-t. Szerver oldalon a NodeJS, illetve adatbázis oldalon
            MongoDB technológiát használok. A MongoDB-t az Express nevű frameworkkel használtam.
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutTheProgram;
