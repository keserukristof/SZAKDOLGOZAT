import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import Link from "@material-ui/core/Link";
import ButtonBase from "@material-ui/core/ButtonBase"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    flexGrow: 1
  }
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              YourTime
            </Typography>
            <ButtonBase  variant="h6" className={classes.link}>
            <Typography>
              Órarend tervező
            </Typography>
            </ButtonBase>
            <ButtonBase  variant="h6" className={classes.link}>
            <Typography>
              Cetlik
            </Typography>
            </ButtonBase>
            <ButtonBase  variant="h6" className={classes.link}>
            <Typography>
              Magamról
            </Typography>
            </ButtonBase>
            <div>
              <Link
                href="https://github.com/keserukristof/SZAKDOLGOZAT"
                color="inherit"
              >
                <IconButton
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
              </Link>
              <Link
                href="https://www.facebook.com/keserukristof"
                color="inherit"
              >
                <IconButton
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <FacebookIcon />
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Nav;
