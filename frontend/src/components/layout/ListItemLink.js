import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PropTypes from 'prop-types';

import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  listItem: {
    color: 'black',
  },
}));

const ListItemLink = (props) => {
  const classes = useStyles();

  const [buttonStyle, set] = useSpring(() => ({
    backgroundColor: 'white',
  }));

  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <animated.div
      onMouseMove={() => set({ backgroundColor: '#3F51B5' })}
      onMouseLeave={() => set({ backgroundColor: 'white' })}
      style={{ backgroundColor: buttonStyle.backgroundColor }}
    >
      <ListItem button className={classes.listItem} component={renderLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </animated.div>
  );
};

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
