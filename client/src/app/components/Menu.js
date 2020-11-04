import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    borderRight: '1px solid #525457',
    width: drawerWidth,
    height: '100%',
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    width: drawerWidth
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1
  },
  iconButton: {
    color: 'white'
  },
}));

export default ({ isOpen }) => {
  const classes = useStyles();

  const MenuItems =
    [
      {
        text: 'test',
        icon: <HomeIcon className={classes.iconButton} />,
      }
    ]

  return (
    <Box
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
    >
      <List>
        {MenuItems.map((menuItem) => (
          <ListItem button component={Link} to={menuItem.route} key={menuItem.text}>
            <ListItemIcon>
              {menuItem.icon}
            </ListItemIcon>
            <ListItemText primary={menuItem.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}