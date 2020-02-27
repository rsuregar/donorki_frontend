import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom:40,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  AppBar: {
    boxShadow:'none',
    alignItems: 'left',
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar variant="dense">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="subtitle1" color="inherit">
            Donorki
          </Typography>
          {/* <Typography  variant="h6" noWrap>
          <Box component="span"  style={{marginTop:10}}>
            <img height="40px"
                alt="Logo"
                src="/static/logo.png"
              />
            </Box>
           <Box component="span" style={{marginTop:10}} display={{ xs: 'block', sm: 'none' }}>
            <img height="50px"
                alt="Logo"
                src="/static/logo.png"
              />
            </Box>
		  	</Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
