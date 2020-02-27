import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import RequestIcon from '@material-ui/icons/Opacity';
import AkunIcon from '@material-ui/icons/Person';
import JadwalIcon from '@material-ui/icons/Map';
import Paper from '@material-ui/core/Paper';
// import Links from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
// import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

const SimpleBottomNavigation = props => {
  const classes = useStyles();
  const path = window.location.pathname.split('/')[1];
  // const [value, setValue] = React.useState('home');
  const [current, setCurrent] = React.useState(path === '' ? 'home':path);

  // console.log(path);

  const handleChange = (event, newValue) => {
    setCurrent(newValue);
    
    // console.log(value)
  };

  return (
    <Paper elevation={2}>
    <BottomNavigation
      value={current} onChange={handleChange}
      showLabels
      className={`${classes.root} ${classes.stickToBottom}`}
    >
      <BottomNavigationAction  component={Link} to="/" value="home" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/event-dan-agenda" value="jadwal" label="Jadwal" icon={<JadwalIcon />} />
      <BottomNavigationAction component={Link} to="/permintaan-donor-darah-darurat" value="request" label="Permintaan" icon={<RequestIcon />} />
      <BottomNavigationAction component={Link} to="/akun" value="akun" label="Akun" icon={<AkunIcon />} />
      {/* <BottomNavigationAction
        component={Link}
        to="/akun"
        label="signal"
        value="signal"
        icon={<AkunIcon />}
    /> */}
    </BottomNavigation>
    </Paper>
  );
}

export default SimpleBottomNavigation;
