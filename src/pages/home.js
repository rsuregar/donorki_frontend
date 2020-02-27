import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Header from '../layouts/header'
import BottomNav from '../layouts/bottomnav'
import PostSlider from '../component/postSlider'
import EventSlider from '../component/eventSlider'
import SlideShow from '../Slider'
import Footer from '../layouts/footer'
import { Paper, Grid, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import ChatIcon from '@material-ui/icons/Chat'

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     flexGrow: 1,
//   },
//   stickToTop: {
//     width: '100%',
//     position: 'sticky',
//     top: 0,
//     zIndex: 3
//   },
// });

const data = [
  {
    slug: '/tentang-donor-darah/apa-itu-donor-darah',
    title: 'Apa itu Donor Darah?',
    image:'https://via.placeholder.com/600x250.png/ee5253/FFFFFF'
  },
  {
    slug: '/tentang-donor-darah/syarat-donor-darah',
    title: 'Syarat Donor Darah?',
    image:'https://via.placeholder.com/600x250.png/8e44ad/FFFFFF'
  },
  {
    slug: '/tentang-donor-darah/hari-donor-darah',
    title: 'Hari Donor Darah Internasional',
    image:'https://via.placeholder.com/600x250.png/2980b9/FFFFFF'
  },
  {
    slug: '/tentang-donor-darah/manfaat-donor-darah',
    title: 'Manfaat Donor Darah',
    image:'https://via.placeholder.com/600x250.png/27ae60/FFFFFF'
  },
];

const event = [
  {
    slug: '/event-dan-agenda/donor-bersama-pahlawan-darah',
    title: 'Donor Darah Bersama Pahlawan Darah',
    image:'https://via.placeholder.com/600x250.png/2ecc71/FFFFFF'
  },
  {
    slug: '/event-dan-agenda/donor-darah-akbar-pmi-makassar',
    title: 'Donor Darah Rutin PMI Makassar',
    image:'https://via.placeholder.com/600x250.png/341f97/FFFFFF'
  },
  {
    slug: '/event-dan-agenda/hari-donor-darah',
    title: 'Hari Donor Darah Internasional',
    image:'https://via.placeholder.com/600x250.png/222f3e/FFFFFF'
  },
  {
    slug: '/event-dan-agenda/manfaat-donor-darah',
    title: 'Manfaat Donor Darah',
    image:'https://via.placeholder.com/600x250.png/f368e0/FFFFFF'
  },
];


export default function Home() {
  // const classes = useStyles();

  return (
    <Fragment>
    <Header/>
    {/* <Container maxWidth="sm" className={classes.stickToTop} style={{backgroundColor:'#fff', textAlign:'center'}}>
      <Typography variant="subtitle1" color="inherit">
      <Box component="span">
            <img  style={{marginTop:10, marginBottom:'-10px'}} height="50px"
                alt="Logo"
                src="/static/logo.png"
              />
            </Box>
      </Typography>
      </Container> */}
    <Container maxWidth="sm" style={{backgroundColor:'#fafafa', height: 'auto', paddingLeft:0, paddingRight:0}}>
    <SlideShow/>
    <Grid style={{padding:20, marginTop:20}}>
      <Typography gutterBottom variant="subtitle1">Permintaan Donor Darah 
      <div style={{float:'right'}}>
      <Link style={{color:'#ee5253', textDecoration:'none'}} to="/permintaan-donor-darah-darurat">Lihat semua</Link>
      </div>
      <Divider /></Typography>
      <Paper square={false} style={{padding:10, marginTop:10, marginBottom:10}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paper>
        <Paper square={false} style={{padding:10, marginTop:10, marginBottom:10}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paper>
    </Grid>

    <Grid style={{padding:20, marginTop:0}}>
    <Typography gutterBottom variant="subtitle1">Tahukah kamu? 
    <div style={{float:'right'}}>
    <Link style={{color:'#ee5253', textDecoration:'none'}} to="/tentang-donor-darah">Baca semua</Link>
    </div>
    <Divider /></Typography>
   
        <PostSlider data={data}/>
     
      {/* <Paper square={false} style={{padding:10, marginTop:10, marginBottom:10}}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paper>
      <Paper square={false} style={{padding:10, marginTop:10, marginBottom:10}}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paper> */}
    </Grid>

    <Grid style={{padding:20, marginTop:0}}>
      <Typography gutterBottom variant="subtitle1">Agenda & Event
      <div style={{float:'right'}}>
      <Link style={{color:'#ee5253', textDecoration:'none'}} to="/event-dan-agenda">Lihat semua</Link>
      </div>
      <Divider /></Typography>
      <EventSlider data={event}/>
    </Grid>

    <Container maxWidth="sm" style={{textAlign:'center', borderRadius:'50%/25px 10% 0 0', backgroundColor:'#ee5253', paddingBottom:'20%'}}>
      <Paper style={{marginTop:'1rem'}}>
          <Typography component="div">
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
        </Typography>
      </Paper>
      <br/>
      {/* <Typography variant="h6" style={{color:'#fff'}}>
        
      </Typography> */}
      
      <Typography variant="body1" style={{color:'#fff'}}>
      <Link style={{color:'#fff', textDecoration:'none'}} to="/tentang">Tentang</Link> {' • '}
      <Link style={{color:'#fff', textDecoration:'none'}} to="/faq">FAQ</Link> {' • '}
      <Link style={{color:'#fff', textDecoration:'none'}} to="/privacy">Kebijakan</Link>
      </Typography>
      <br/>
      <Footer/>
    </Container>
    </Container>
    <BottomNav/>
    </Fragment>
  );
}