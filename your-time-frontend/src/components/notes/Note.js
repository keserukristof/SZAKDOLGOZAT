import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FFFFFF 80%, #EBEBEB 100%)',
    width: "auto"
  },
});


const Note = ({ note, toggleComplete, removeNote }) => {
  const classes = useStyles();

  const handleCheckboxClick = () => {
    toggleComplete(note.id);
  };

  const handleRemoveClick = () => {
    removeNote(note.id);
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <ListItem style={{ display: "flex" }}>
        <Checkbox
          color="primary"
          checked={note.completed}
          onClick={handleCheckboxClick}
        />
        <Typography
          variant="body1"
          style={{
            color: note.completed ? "green" : "black"
          }}
        >
          {note.task}
        </Typography>
        <IconButton onClick={handleRemoveClick}>
          <CloseOutlinedIcon />
        </IconButton>
      </ListItem>
    </Paper>
  );
};

export default Note;
