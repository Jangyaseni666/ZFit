import React from "react";
import { Box, Text, Heading,Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import Fit_mid_card from "./fit_mid_card";
import "react-multi-carousel/lib/styles.css";
import "./fit_car.css";

function Fit_mid_car() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
      <Box
        textAlign={"center"}
        backgroundColor={"#070B11"}
        p={10}
        fontFamily={"inter"}
      >
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/malibu-blur-circle.svg" 
        position={"absolute"} w={"60%"} right={"50%"} zIndex={0}/>
        <Text as="samp" color={"#B9BABB"} fontFamily={"inter"}>
          AT_CENTER
        </Text>
        <Heading mb={"2%"} color={"white"} fontFamily={"inter"}>
          Trainer-led group classes
        </Heading>

        <Carousel responsive={responsive} className="card_car_mid" infinite="true" >
          <Fit_mid_card imgsrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png" />
          <Fit_mid_card imgsrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/8009b1d0-4f5e-49e1-bc94-c41da6a5bcc1.png" />
          <Fit_mid_card imgsrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/7bf136db-7217-4733-af9f-1bb8a4155a83.png" />
          <Fit_mid_card imgsrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/c88b72d2-8962-47f3-894b-165c20c34b05.jpeg" />
          <Fit_mid_card imgsrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/7edc94fb-e895-4065-8e56-dabffdd4e4b0.png" />
          <Fit_mid_card imgsrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive//image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png" />
        </Carousel>
      </Box>
  );
}

export default Fit_mid_car;
