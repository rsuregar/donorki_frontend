import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
// import Header from './layouts/header'
import BottomNav from './layouts/bottomnav'
import SlideShow from './Slider'
import Footer from './layouts/footer'
import { Paper, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

// import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  stickToTop: {
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 3
  },
});


export default function App() {
  const classes = useStyles();

  return (
    <Fragment>
    {/* <Header/> */}
    <Container maxWidth="sm" className={classes.stickToTop} style={{backgroundColor:'#fff', textAlign:'center'}}>
      <Typography variant="subtitle1" color="inherit">
      <Box component="span">
            <img  style={{marginTop:10, marginBottom:'-10px'}} height="50px"
                alt="Logo"
                src="/static/logo.png"
              />
            </Box>
      </Typography>
      </Container>
    <Container maxWidth="sm" style={{backgroundColor:'#fafafa', height: 'auto', paddingLeft:0, paddingRight:0}}>
    <SlideShow/>
    <Grid style={{padding:20, marginTop:20}}>
    <Typography gutterBottom variant="subtitle1">Tahukah kamu? 
    <Divider /></Typography>
      <Paper square={false} style={{padding:10, marginTop:10, marginBottom:10}}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paper>
      <Paper square={false} style={{padding:10, marginTop:10, marginBottom:10}}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paper>
    </Grid>

    <Grid style={{padding:20, marginTop:0}}>
      <Typography gutterBottom variant="subtitle1">Permintaan Donor Darah 
      <Divider /></Typography>
      <Paper square={false} style={{padding:10, marginTop:10, marginBottom:10}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paper>
        <Paper square={false} style={{padding:10, marginTop:10, marginBottom:10}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paper>
    </Grid>

    <Container maxWidth="sm" style={{textAlign:'center', borderRadius:'50%/25px 10% 0 0', backgroundColor:'#ee5253', paddingBottom:'12%'}}>
      <Paper style={{marginTop:'1rem'}}>
          {/* <Typography component="div">
          <Box paddingTop={2} fontSize={16} fontWeight="bold" m={1}>
            Ada Permintaan?
          </Box>
          <Box paddingBottom={2} fontSize={14} m={1}>
            Kami akan membantu Anda melalui pesan chat <br/>
            <Button style={{backgroundColor:'#25D366', color:'#fff', marginTop:10}}
              variant="contained"
              size="small"
              href="https://wa.me/6285342116212"
              startIcon={<ChatIcon />}
            >
              WhatsApp
            </Button>
          </Box>
        </Typography> */}
      </Paper>
      <br/>
      {/* <Typography variant="h6" style={{color:'#fff'}}>
        
      </Typography> */}
      
      <Typography variant="body1" style={{color:'#fff'}}>
      <Link color="inherit" href="#">Tentang</Link> {' • '}
      <Link color="inherit" href="#">FAQ</Link> {' • '}
      <Link color="inherit" href="#">Kebijakan</Link>
      </Typography>
      <br/>
      <Footer/>
    </Container>
    </Container>
    <BottomNav/>
    </Fragment>
  );
}