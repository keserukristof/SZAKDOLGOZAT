import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const NavListItem = props => {
  return (
    <ListItem>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText>{props.text}</ListItemText>
    </ListItem>
  );
};

export default NavListItem;
