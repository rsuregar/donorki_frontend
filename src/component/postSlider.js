import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      paddingBottom:40,
      
    },
    container: {
      backgroundColor:"#fafafa",
      width:75,
      height:100,
        '& > img': {
            width:"auto",
            padding:10,
            height:100,
            backgroundSize:'cover',
            objectFit:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            // borderBottomRightRadius:'20% 7%',
            // borderBottomLeftRadius:'20% 7%',
            borderRadius: '0 0 200px 50%/40px'
          }
    },
    media: {
        height: 100,
    },
    cardStyle:{
        // width: 300,
        transitionDuration: '0.3s',
        height: '22vh',
    }
  }));

export default function PostSlider (data) {

    const [value, setValue] = React.useState(data.data);
    // React.useEffect(() => {
    //     setValue(data)
    // }, [])

    console.log(value)
    const classes = useStyles();

    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        swipeToSlide: true,
        arrows:false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ],
          customPaging: i => (
            <div
              style={{
                marginTop:10,
                width: 25,
                height: 10,
                color: '#00000014',
                // border: "1px grey solid",
                borderRadius: 30,
                backgroundColor: '#00000014'
              }}
            >
              {/* {i + 1} */}
            </div>
          )
      };
  
    return (
        
    <div style={{backgroundColor:'#fff', borderRadius:10}}>
    <Box width="100%">
    <Slider {...settings}>

    {
      value.map((a,i) => 
        <Box key={i} width="33%" bgcolor="grey.10" p={1} my={0.5}>
        <Card className={classes.cardStyle}>
            <CardActionArea style={{height:'22vh'}} component={Link} to={a.slug}>
                <CardMedia
                className={classes.media}
                image={a.image}
                title={a.title}
                />
                <CardContent>
                <Typography gutterBottom variant="caption" component="div">
                    {a.title}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Box>
      )
    }
        
    
    </Slider>
    </Box>
    </div>
    );
  }