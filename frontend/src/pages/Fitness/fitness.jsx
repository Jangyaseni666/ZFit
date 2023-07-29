import { Grid, Image, Button, Spacer, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import FitCarousel from "../../components/FitnessUpper/fitcarousel";
import Fit_video from "../../components/FitnessMiddle/fit_video";
import Fit_mid_car from "../../components/FitnessMiddle/fit_carousel";
import At_home from "../../components/FitnessMiddle/at_home";
import Plan_table from "../../components/FitnessMiddle/Plan";
import FitnessLower from "../../components/FitnessLower/fitnessLower";
import FitnessUpper from "../../components/FitnessUpper/fitnessupper";

const Fitness = () => {
  return (
    <>
      <FitnessUpper />
      <FitCarousel className="carousell" />
      <Fit_video />
      <Fit_mid_car />
      <At_home />
      <Plan_table />
      {/* <Box maxW={"100vw"}> */}
      <FitnessLower />
      {/* </Box> */}
    </>
  );
};

export default Fitness;
