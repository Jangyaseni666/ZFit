import React from "react";
import {useState,useEffect} from "react";
import ReactPlayer from "react-player";
import "../Pages/fitness_lower.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Box,Flex} from "@chakra-ui/react";
import { color } from "framer-motion";

function FitnessLower(){
    const tryforfree=()=>{

    }
    const buynow=()=>{

    }
    const startafreetrial=()=>{

    }
    const joinnow=()=>{

    }
    const [activeIndex, setActiveIndex] = useState(0);

  let sliderRef = React.createRef();

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current) => setActiveIndex(current)
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeIndex === 3) { // 4 is the total number of slides minus 1.
        setActiveIndex(0);
        sliderRef.slickGoTo(0);
      } else {
        sliderRef.slickGoTo(activeIndex + 1);
      }
    }, 3000); // change slides every 3 seconds
    return () => clearInterval(timer);
  }, [activeIndex]);

    return(
        <center>
        <div className="threecards">
            <div>
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png"/>
                <button onClick={startafreetrial} id="hover-btn">START A FREE TRIAL</button>
            </div>
            <div>
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png"/>
                <button onClick={startafreetrial} id="hover-btn">START A FREE TRIAL</button>
            </div>
            <div>
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png"/>         
                <button onClick={startafreetrial} id="hover-btn">START A FREE TRIAL</button>

            </div>
        </div>
        <div className="cultpasselite">
            <div className="elitetwo">
                <div id="rimg">
                    <img width={150} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"></img>
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"></img>
                </div>
                <h1 style={{fontSize:"32px"}}>Unlimited access to everything in your city</h1>
                <br/>
                <br></br>
                <h1>Unlimited Access to </h1>
                <div id="imgtxt">
                    <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
                    <h2>At-center group classes</h2>
                </div>
                <div id="imgtxt">
                    <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
                    <h2>All ELITE & PRO gyms</h2>
                </div>
                <div id="imgtxt">
                    <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
                    <h2>At-home live workouts</h2>
                </div>
                <br/>
                <br/>
                <h1>Starting at ₹833 / month + taxes</h1>
                <div id="imgbtn">
                    <button id="tryforfree" onClick={tryforfree}>Try For Free</button>
                    <button id="buynow" onClick={buynow}>Buy Now</button>
                </div>
                <div id="saleonnow">
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_27,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/offer.png">
                    </img>
                    <h1>SALE ON NOW</h1>
                </div>   
            </div>
            <div className="eliteone">
                <Slider ref={c => (sliderRef = c)} {...settings}>
                    <div>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png"/>
                    </div>
                    <div>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png"/>

                    </div>
                </Slider>
            </div>
        </div>
        <div className="cultpasselite">
            <div className="eliteone">
                <Slider ref={c => (sliderRef = c)} {...settings}>
                    <div>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png"/>
                    </div>
                    <div>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png"/>
                    </div>
                </Slider>
            </div>
            <div className="elitetwo">
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_265,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro.png"></img>
                <h1 style={{fontSize:"32px"}}>Unlimited access to PRO gyms in your city</h1>
                <br/>
                <br></br>
                <h1>Unlimited Access to </h1>
                <div id="imgtxt">
                    <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
                    <h2>All PRO gyms</h2>
                </div>
                <div id="imgtxt">
                    <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
                    <h2>At-home live workouts</h2>
                </div>
                <div id="imgtxt">
                    <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
                    <h2>2 Sessions/month at ELITE gyms & group classes</h2>
                </div>
                <br/>
                <br/>
                <h1>Starting at ₹545 / month + taxes</h1>
                <div id="imgbtn">
                    <button id="tryforfree" onClick={tryforfree}>Try For Free</button>
                    <button id="buynow" onClick={buynow}>Buy Now</button>
                </div>
                <div id="saleonnow">
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_27,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/offer.png">
                    </img>
                    <h1>SALE ON NOW</h1>
                </div>   
            </div>

        </div>

        <div className="vdo-container">
                <div className="vdo">
                    <ReactPlayer
                        url="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1084,ar_2,q_auto:eco,dpr_1,vc_auto,f_auto/image/test/sku-card-widget/fitness_live.mp4"
                        playing
                        loop
                        muted
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="text">
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_339,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-1.svg"></img>
                    <h1 style={{fontSize:"32px"}}>Bring the gym home</h1>
                    <br/>
                    <br></br>
                    <h1>Unlimited Access to </h1>
                    <div id="imgtxt">
                        <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
                        <h2>At-home workouts</h2>
                    </div>
                    <div id="imgtxt">
                        <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
                        <h2>Celebrity workouts</h2>
                    </div>
                    <div id="imgtxt">
                        <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
                        <h2>Goal-based workouts & meditation sessions</h2>
                    </div>
                    <br/>
                    <br/>
                    <h1>Starting at ₹97/month + taxes</h1>
                    <div id="imgbtn">
                        <button id="tryforfree" onClick={tryforfree}>Try For Free</button>
                        <button id="buynow" onClick={buynow}>Buy Now</button>
                    </div>
                    <div id="saleonnow">
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_27,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/offer.png">
                        </img>
                        <h1>SALE ON NOW</h1>
                    </div>
                </div>
        </div>
        <center>
            <div className="transform">
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/a5077452-0ba1-469f-a9ab-3eb6429de7c2.png"></img>
            </div>
            <div className="community">
                <div className="commtext">
                    <h1 id="commhead">CULT <span >COMMUNITY</span></h1>
                    <br/>
                    <br/>
                    <h1>Be a part of cult community</h1>
                    <br/>
                    <h2>Join the facebook community today</h2>
                    <br/>
                    <br/>
                    <button onClick={joinnow} id="joinnow">JOIN NOW</button>
                </div>
                <div className="commimg">
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/246641e8-00d7-42f7-ac92-3207665e35f7.svg"></img>
                </div>
            </div>
        
                

        </center>
        
        </center>
    )
    
}
export default FitnessLower;
    
