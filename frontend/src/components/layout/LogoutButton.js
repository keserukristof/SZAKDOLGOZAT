import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link as RouterLink } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { AuthContext } from '../../context/auth-contex';

const useStyles = makeStyles((theme) => ({
  listItem: {
    color: 'black',
  },
}));

const LogoutButton = () => {
  const classes = useStyles();
  const auth = useContext(AuthContext);

  const [buttonStyle, set] = useSpring(() => ({
    backgroundColor: 'white',
  }));

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={'/'} ref={ref} {...itemProps} />
      )),
    []
  );

  return (
    <animated.div
      onMouseMove={() => set({ backgroundColor: '#3F51B5' })}
      onMouseLeave={() => set({ backgroundColor: 'white' })}
      style={{ backgroundColor: buttonStyle.backgroundColor }}
    >
      <ListItem
        className={classes.listItem}
        onClick={auth.logout}
        component={renderLink}
        button
      >
        <ListItemIcon>
          <ArrowBackIcon />
        </ListItemIcon>
        <ListItemText primary={'Log out'} />
      </ListItem>
    </animated.div>
  );
};

export default LogoutButton;
