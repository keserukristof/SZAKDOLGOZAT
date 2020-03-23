import React from "react";
import CostumCard from "../components/CostumCard";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSpring, animated } from "react-spring";

const AboutMe = () => {
  const animation = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { duration: 1000 }
  });

  return (
    <animated.div style={animation}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={5}>
          <CostumCard
            image={require("../images/myself.jpg")}
            hover="The author"
            title="The author"
            description="My name is Kristóf Keserű, third year DE IK PTI student. This is my thesis project. 
          The application made with the help of Dr. Kuki Attila."
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography component="div">
            <Box textAlign="center" fontWeight={250} fontSize={40} m={1}>
              About me
            </Box>
            <Box textAlign="center" m={2}>
              I'm Kristóf Keserű. I grow up in Püspökladányban and here I
              finished high school then I continue my studies at the University
              of Debrecen.I learn Computer Science in here.
            </Box>
            <Box textAlign="center" m={2}>
              What attracts me most is web development. I am currently trying to
              keep up to date with today's most popular web technologies.
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </animated.div>
  );
};

export default AboutMe;
