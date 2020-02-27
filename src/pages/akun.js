import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import BottomNav from '../layouts/bottomnav'
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
// import Links from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import Footer from '../layouts/footer'


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


export default function Akun() {
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
    <Container maxWidth="sm" style={{backgroundColor:'#fafafa', height: '90vh', paddingLeft:0, paddingRight:0}}>
    {/* <SlideShow/> */}
    <Grid style={{padding:30, marginTop:0}}>
    <Typography gutterBottom variant="h6">Akun 
    <Divider /></Typography>
      <Typography component="div" style={{paddingTop:100, paddingBottom:'18%'}}>
          <Box paddingTop={2} textAlign="center" fontSize={25} fontWeight="normal" m={1}>
            Ayo gabung <br/>
            dan jadilah <br/>
            Pahlawan!
          </Box>
          <Box paddingBottom={2} textAlign="center" fontSize={14} m={1}>
            {/* Kami akan membantu Anda melalui pesan chat <br/> */}
            <Button style={{color:'#fff',marginTop:10, fontWeight:'normal'}}
              component={Link}
              variant="contained"
              to={'/akun/daftar'}
              size="medium"
              color="primary"
              startIcon=''
            >
              Gabung Sekarang
            </Button>
            <br/>
            <br/>
            Sudah memiliki akun. <br/>Silakan <Link to="/akun/login" style={{textDecoration:'none'}}>Login disini</Link>.
          </Box>
        </Typography>
    </Grid>

    {/* <Container maxWidth="sm" style={{textAlign:'center', borderRadius:'50%/25px 10% 0 0', backgroundColor:'#ee5253', paddingBottom:'12%'}}>
      <br/>
      <Typography variant="body1" style={{color:'#fff'}}>
      <Links color="inherit" href="#">Tentang</Links> {' • '}
      <Links color="inherit" href="#">FAQ</Links> {' • '}
      <Links color="inherit" href="#">Kebijakan</Links>
      </Typography>
      <br/>
      <Footer/>
    </Container> */}
    </Container>
    <BottomNav/>
    </Fragment>
  );
}