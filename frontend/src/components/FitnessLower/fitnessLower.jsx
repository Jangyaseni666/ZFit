import React from "react";
import { useState, useEffect } from "react";
import { createRef } from "react";
import ReactPlayer from "react-player";
import "./fitnesslower.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { color } from "framer-motion";

function FitnessLower() {
  const tryforfree = () => {};
  const buynow = () => {};
  const startafreetrial = () => {};
  const joinnow = () => {};
  const [activeIndex, setActiveIndex] = useState(0);

  let sliderRef = React.createRef();
  console.log(sliderRef);

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
    afterChange: (current) => setActiveIndex(current),
  };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(activeIndex);
      if (activeIndex === 3) {
        // 4 is the total number of slides minus 1.
        setActiveIndex(0);
        console.log(sliderRef);
        sliderRef.slickGoTo(0);
      } else {
        console.log(sliderRef);
        // sliderRef.slickGoTo(activeIndex + 1);
      }
    }, 3000); // change slides every 3 seconds
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <center>
      <Heading color={"white"} fontFamily={"inter"} size={"2xl"}>
        FREE TRIALS
      </Heading>
      <div className="threecards">
        <div>
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png" />
          <button onClick={startafreetrial} id="hover-btn">
            START A FREE TRIAL
          </button>
        </div>
        <div>
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png" />
          <button onClick={startafreetrial} id="hover-btn">
            START A FREE TRIAL
          </button>
        </div>
        <div>
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png" />
          <button onClick={startafreetrial} id="hover-btn">
            START A FREE TRIAL
          </button>
        </div>
      </div>
      <Box className="cultpasselite" w={"80%"}>
        <div className="elitetwo">
          <div id="rimg">
            {/* <img
              width={150}
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
            ></img> */}
            <Heading size={"2xl"}>
              <b>z-Pass</b>
            </Heading>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
              w={"20%"}
              h={"12%"}
              p={2}
            />
          </div>
          <h1 style={{ fontSize: "32px" }}>
            Unlimited access to everything in your city
          </h1>
          <br />
          <h1>Unlimited Access to </h1>
          <div id="imgtxt">
            <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
            <h4>At-center group classes</h4>
          </div>
          <div id="imgtxt">
            <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
            <h4>All ELITE & PRO gyms</h4>
          </div>
          <div id="imgtxt">
            <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
            <h4>At-home live workouts</h4>
          </div>
          <br />
          <h1>Starting at ₹833 / month + taxes</h1>
          <div id="imgbtn">
            <button id="tryforfree" onClick={tryforfree}>
              Try For Free
            </button>
            <button id="buynow" onClick={buynow}>
              Buy Now
            </button>
          </div>
          <Box id="saleonnow" color="white" display={"flex"}>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_27,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/offer.png"
              w={"4%"}
              h={"1%"}
            ></Image>
            <Text>SALE ON NOW</Text>
          </Box>
        </div>
        <div className="eliteone">
          <Slider ref={(c) => (sliderRef = c)} {...settings}>
            <div>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png" />
            </div>
            <div>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png" />
            </div>
          </Slider>
        </div>
      </Box>

      <Box className="cultpasselite" w={"80%"}>
        <div className="eliteone">
          <Slider ref={(c) => (sliderRef = c)} {...settings}>
            <div>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png" />
            </div>
            <div>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png" />
            </div>
          </Slider>
        </div>
        <div className="elitetwo">
          <Box id="rimg" h={"11%"}>
            {/* <img
              width={150}
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
            ></img> */}
            <Heading size={"2xl"}>
              <b>z-Pass</b>
            </Heading>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_105,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
              w={"20%"}
              p={2}
            />
          </Box>
          <h1 style={{ fontSize: "32px" }}>
            Unlimited access to PRO gyms in your city
          </h1>
          <br />
          <h1>Unlimited Access to </h1>
          <div id="imgtxt">
            <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
            <h4>All PRO gyms</h4>
          </div>
          <div id="imgtxt">
            <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
            <h4>At-home live workouts</h4>
          </div>
          <div id="imgtxt">
            <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
            <h4>2 Sessions/month at ELITE gyms & group classes</h4>
          </div>
          <br />
          <h1>Starting at ₹545 / month + taxes</h1>
          <div id="imgbtn">
            <button id="tryforfree" onClick={tryforfree}>
              Try For Free
            </button>
            <button id="buynow" onClick={buynow}>
              Buy Now
            </button>
          </div>
          <Box id="saleonnow" color="white" display={"flex"}>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_27,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/offer.png"
              w={"4%"}
              h={"1%"}
            ></Image>
            <Text>SALE ON NOW</Text>
          </Box>
        </div>
      </Box>

      <Box className="vdo-container" maxW={"100vw"}>
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
          <Box id="rimg" h={"12%"}>
            <Heading size={"2xl"}>
              <b>z-Pass</b>
            </Heading>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg"
              w={"15%"}
              p={2}
            />
          </Box>
          <h1 style={{ fontSize: "32px" }}>Bring the gym home</h1>
          <h1>Unlimited Access to </h1>
          <div id="imgtxt">
            <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
            <h4>At-home workouts</h4>
          </div>
          <div id="imgtxt">
            <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
            <h4>Celebrity workouts</h4>
          </div>
          <div id="imgtxt">
            <img src="https://static.cure.fit/assets/images/orangeTick.png"></img>
            <h4>Goal-based workouts & meditation sessions</h4>
          </div>
          <br />
          <h1>Starting at ₹97/month + taxes</h1>
          <div id="imgbtn">
            <button id="tryforfree" onClick={tryforfree}>
              Try For Free
            </button>
            <button id="buynow" onClick={buynow}>
              Buy Now
            </button>
          </div>
          <Box id="saleonnow" color="white" display={"flex"}>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_27,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/sku-card-widget/offer.png"
              w={"2.5%"}
              h={"1%"}
            ></Image>
            <Text>SALE ON NOW</Text>
          </Box>
        </div>
      </Box>
      <center>
        <div className="transform">
          <img src="culttransform.png"></img>
        </div>
        <div className="community">
          <div className="commtext">
            <h1 id="commhead">
              Z <span>COMMUNITY</span>
            </h1>
            <br />
            <br />
            <h1>Be a part of cult community</h1>
            <br />
            <h4>Join the facebook community today</h4>
            <br />
            <br />
            <button onClick={joinnow} id="joinnow">
              JOIN NOW
            </button>
          </div>
          <div className="commimg">
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/246641e8-00d7-42f7-ac92-3207665e35f7.svg"></img>
          </div>
        </div>
      </center>
    </center>
  );
}
export default FitnessLower;
