import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import NavListItem from "./NavListItem";
import TableChartIcon from '@material-ui/icons/TableChart';
import NoteIcon from '@material-ui/icons/Note';
import CodeIcon from '@material-ui/icons/Code';
import PortraitIcon from '@material-ui/icons/Portrait';
import GitHubIcon from '@material-ui/icons/GitHub';


const drawerWidth = 240;

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
            Clipped drawer
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
          <NavListItem text="Órarendtervező" icon={<TableChartIcon />} />
          <NavListItem text="Cetlik" icon={<NoteIcon />} />
          <NavListItem text="A programról" icon={<CodeIcon />} />
          <NavListItem text="A készítőről" icon={<PortraitIcon />} />
          <NavListItem text="Github" icon={<GitHubIcon />} />
        </List>
      </Drawer>
    </div>
  );
};

export default Nav;
