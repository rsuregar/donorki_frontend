import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      paddingBottom:40,
      
    },
    container: {
      
        '& > img': {
            width:'100%',
            height:250,
            backgroundSize:'cover',
            objectFit:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            // borderBottomRightRadius:'20% 7%',
            // borderBottomLeftRadius:'20% 7%',
            borderRadius: '0 0 200px 50%/40px'
          }
    }
  }));

export default function SimpleSlider () {
    // const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        swipeToSlide: true,
        arrows:false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          customPaging: i => (
            <div
              style={{
                width: 20,
                height: 20,
                color: '#ee5253',
                border: "1px red solid",
                borderRadius: '50%'
              }}
            >
              {i + 1}
            </div>
          )
      };
  
    return (
        // <div style={{backgroundColor:'#ee5253'}}>
    <Slider {...settings}>
        {/* <div className={classes.container}>
        <img src="https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="hahah" />
        </div> */}
        <div className={classes.container}>
        <img src="https://via.placeholder.com/600x250.png/ee5253/FFFFFF" alt="hahah" />
        </div>
    </Slider>
    // <hr/>
    // </div>
    );
  }