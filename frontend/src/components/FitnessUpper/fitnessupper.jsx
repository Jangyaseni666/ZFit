import { Grid, Image, Button, Spacer, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import "./fitnessupper.css";
import FitUpCard from "./fitupcard";
// import FitCarousel from "./fitcarousel";
// import Fit_video from "../fitnessmiddle/fit_video";
// import Fit_mid_car from "../fitnessmiddle/fit_carousel";
// import At_home from "../fitnessmiddle/at_home";
// import Plan_table from "../fitnessmiddle/Plan";
// import FitnessLower from "../fitnesslower/fitnessLower";

const FitnessUpper = () => {
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scaleFactor = 1 + scrollPosition / 800;
    setScale(scaleFactor);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);
  return (
    <>
      <Box className="containerr">
        <Image
          src="bgfit.png"
          alt="error"
          zIndex={"-5"}
          objectFit={"cover"}
          objectPosition={"center"}
          className="fitcover"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 300ms ease-in",
          }}
        />
        <div className="grad"></div>
        <Button id="explore">TRY FOR FREE</Button>
        <Grid
          className="gridcards"
          templateColumns={"repeat(3,1fr)"}
          gap={"8%"}
          w="70%"
          mt={"2%"}
        >
          <FitUpCard
            src="elite.webp"
            desc="Starting at  &#8377;1208 / month"
            title="z-Pass"
          />
          <FitUpCard
            src="pro.webp"
            desc="Starting at  &#8377;920 / month"
            title="z-Pass"
          />
          <FitUpCard
            src="home.webp"
            desc="Starting at  &#8377;115 / month"
            title="z-Pass"
          />
        </Grid>
      </Box>
    </>
  );
};

export default FitnessUpper;
