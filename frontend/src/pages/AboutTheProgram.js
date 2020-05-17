import React from 'react';

import { Grid } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import CostumCard from '../components/CostumCard';

const AboutTheProgram = () => {
  const animation = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={animation}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Link
            href="https://github.com/keserukristof/SZAKDOLGOZAT"
            color="inherit"
            underline="none"
          >
            <CostumCard
              image={require('../images/github.png')}
              hover="Github"
              title="Github"
              description="Check out the github repo of my webpage."
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={5}>
            <Grid item xs>
              <Box textAlign="center" fontWeight={250} fontSize={40} m={1}>
                About the program
              </Box>
              <Box textAlign="left" m={1}>
                As a third year DE IK PTI student I entered the phase of my
                studies where I had to choose a thesis topic. After reviewing
                the long list, the topic "Client Server Architecture (Web)
                Application Development" by Dr. Attila Kuki seemed to me the
                most ideal.
              </Box>
              <Box textAlign="left" m={1}>
                This web application gives elementary and high school students
                the ability to access their timetable, edit it, and add
                after-school activities in one place.
              </Box>
              <Box textAlign="left" m={1}>
                Using the "Notes" feature, students can create tasks, notes, and
                after the notes are not actual, they can be removed.
              </Box>
              <Box textAlign="left" m={1}>
                I spent a lot of time finding modern web technologies that I
                could easily implement the goals I set out during the project
                design phase. On the client page I used HTML5, CSS3, JavaScript
                technologies with React. The Material UI is responsible for the
                appearance of the web page. I use NodeJS on the server side and
                MongoDB technology on the database side. I used MongoDB with a
                framework called Express.
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </animated.div>
  );
};

export default AboutTheProgram;
