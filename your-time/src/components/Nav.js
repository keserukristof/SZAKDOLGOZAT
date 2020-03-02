import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import TableChartIcon from "@material-ui/icons/TableChart";
import NoteIcon from "@material-ui/icons/Note";
import CodeIcon from "@material-ui/icons/Code";
import ListItemLink from "./ListItemLink";
import PortraitIcon from "@material-ui/icons/Portrait";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({

  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            YourTime
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItemLink
            to="/time-table"
            primary="Órarend"
            icon={<TableChartIcon />}
          />
          <ListItemLink to="/notes" primary="Cetlik" icon={<NoteIcon />} />
          <ListItemLink
            to="/about-the-program"
            primary="A programról"
            icon={<CodeIcon />}
          />
          <ListItemLink
            to="/about-the-author"
            primary="A készítőről"
            icon={<PortraitIcon />}
          />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
  );
};

export default Nav;
