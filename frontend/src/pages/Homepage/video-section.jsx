import {
  Box,
  Button,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import "./homepage.css";

const VideoSection = () => {
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  };

  return (
    <Box p={4} className="zoom-video-div" width="100vw">
      <video autoPlay loop muted>
        <source
          src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1600,ar_1.77,q_auto:eco,dpr_1,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
          type="video/mp4"
        />
      </video>
      <Box mt={[2, 5, 8]} mx="auto" maxWidth={["100%", "80%", "60%"]}>
        <Box className="design-top-right" />
            <Image src="oie_trans.gif" position={"relative"} top={"80%"} left={"20%"} />
        <Box className="main-text-block" mt={3}>
          <Heading id="main-text" as="h2" mb={3}>
            A fitness movement that is worth breaking a sweat for.
          </Heading>
          <Box id="main-button-box">
            <Button>EXPLORE Z-PASS</Button>
          </Box>
          <Box id="scroll-down" mt={3}>
            <Image
              id="scroll-down-img"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_22,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/Path.png"
            />
          </Box>
        </Box>
      </Box>
      <Box
        id="main-gradient"
        position="absolute"
        bottom={0}
        left={0}
        w="100%"
        h={["30%", "20%", "15%"]}
      >
        <Image
          id="main-gradient-img"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default VideoSection;
