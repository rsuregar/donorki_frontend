import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import { deepOrange, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      paddingBottom:40,
      
    },
    inline: {
        display: 'inline',
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    red: {
        color: theme.palette.getContrastText(red[600]),
        backgroundColor: red[600],
    },
  }));

export default function RequestList (data) {

    const [value] = React.useState(data.data);
    const classes = useStyles();

    return (        
    <div>
    <Box width="100%">
    <List className={classes.root}>
      
    {
      value.map((a,i) => 
      <div style={{backgroundColor:'#fff'}} key={i}>
          
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                <Avatar className={classes.red}>{a.blood}</Avatar>
            </ListItemAvatar>
            <Link style={{textDecoration:'none', color:'#ee5253'}} to={a.slug}>
            <ListItemText
                primary={a.desc}
                secondary={
                <React.Fragment>
                    <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    >
                    {a.by}
                    </Typography>
                    {` — ${a.desc}`}
                </React.Fragment>
                }
            />
            </Link>
            <ListItemSecondaryAction>
                    <IconButton href={`https://wa.me/${a.contact}?text=*Salam* - Saya+ingin+mendonor.+Dimana+saya+bisa+mendonor?`} color="primary" edge="end" aria-label="comments">
                    <CallIcon />
                    </IconButton>
                    <IconButton href={`https://wa.me/?text=saya+ingin+berbagi+info+donor+darah+${a.desc}`} color="secondary" edge="end" aria-label="comments">
                    <ShareIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
     </div>
      )
    }
    </List>
    </Box>
    </div>
    );
  }