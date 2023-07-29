import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Button,
  Stack,
  Text,
  Card,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import "./homepage.css"
import VideoSection from "./video-section";
import CultIntroSection from "./pass-intro";
import Panel1 from "./info-card1";
import MoveToTopButton from './move-top';
import Loader from './loader';

const Homepage = () => {
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? <Loader /> :

    <div>
      {/* Zoom Video Div*/}
      <VideoSection />
      {/* ---------------- */}

      {/* Membership Card Div*/}
      <Box className="membership-card-div" justifyContent="center" maxW={"100vw"} h={"50%"}>
        <SimpleGrid
          className="membership-cards"
          columns={["1","1","3","3",]}
          fontFamily={"inter"}
        >
          <Card id="member-card" backgroundColor="rgb(255 255 255 / 5%)" m={3}>
            <Box id="zpass" fontFamily="Brandon-text">
              <Text fontFamily={'Brandon Text'}>Z-Pass</Text>
            </Box>
            <Box id="passtype">
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                w="22"
                h="8"
              />
            </Box>
            <Box id="passtext">
              <Text fontFamily={'Brandon Text'}>
                Unlimited access to group classes, all gyms and at-home workouts
              </Text>
            </Box>
          </Card>
          <Card id="member-card" backgroundColor="rgb(255 255 255 / 5%)" m={3}>
            <Box id="zpass" fontFamily="Brandon-text">
              <Text fontFamily={'Brandon Text'}>Z-Pass</Text>
            </Box>
            <Box id="passtype">
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                w="22"
                h="8"
              />
            </Box>
            <Box id="passtext">
              <Text fontFamily={'Brandon Text'}>
                Unlimited access to group classes, all gyms and at-home workouts
              </Text>
            </Box>
          </Card>
          <Card id="member-card" backgroundColor="rgb(255 255 255 / 5%)" m={3}>
            <Box id="zpass" fontFamily="Brandon-text">
              <Text fontFamily={'Brandon Text'}>Z-Pass</Text>
            </Box>
            <Box id="passtype">
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg"
                w="22"
                h="8"
              />
            </Box>
            <Box id="passtext">
              <Text fontFamily={'Brandon Text'}>
                Unlimited access to group classes, all gyms and at-home workouts
              </Text>
            </Box>
          </Card>
        </SimpleGrid>
      </Box>
      {/* ------------------- */}

      {/* Cult Pass Intro Div */}
      <CultIntroSection />
      {/* -------------------- */}

      {/* Info Card Div */}
      <Box className="info-card-div" >
        <Box className="info-card-div-inner">
          <Panel1 />
          <Box className="info-bg-div">
            <Box className="info-bg-div1">
              <Image
                id="info-bg-img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg"
              />
            </Box>
            <Box className="info-bg-div2">
              <Image
                id="info-bg-img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg"
              />
            </Box>
            <Box className="info-bg-div3">
              <Image
                id="info-bg-img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg"
              />
            </Box>
            <Box className="info-bg-div4">
              <Image
                id="info-bg-img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/golden-blur-circle.svg"
              />
            </Box>
            <Box className="info-bg-div5">
              <Image
                id="info-bg-img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* --------------- */}

      {/* Download App */}
      <Box className="download-app-div">
        <Box className="download-app-div-inner">
          <Card id="download-card">
            <Box id="download-card-inner">
              <Text id="download-text1">
                Download the most loved fitness app
              </Text>
              <Text id="download-text2">
                Start your fitness journey with us. Join z.fit!
              </Text>
              <Flex className="download-btn-div">
                <Box id="download-btn1">
                  <Image
                    id="download-image1"
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/appstore.svg"
                  />
                </Box>
                <Box id="download-btn1">
                  <Image
                    id="download-image2"
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/googleplay.svg"
                  />
                </Box>
              </Flex>
            </Box>
          </Card>
        </Box>
      </Box>
      {/* --------------- */}

      {/* Join Cult Div */}
      <Box className="join-cult-div">
        <Box className="join-cult-inner">
          <Heading id="join-cult-heading">Join the z family</Heading>
          <Flex className="join-card-div" flexDir={["column","column","row","row",]} justify={"space-between"} pl={"5vw"}>
            <Box className="join-cards" w={["90vw","90vw","90vw","40vw",]}>
              <Card
                className="join-card"
                id="join-card1"
                backgroundColor="tranparent"
                borderRadius="35px"
                p={1}
                
              >
                <Flex id="join-card-inner">
                  <Text id="join-card1-text">Careers at Cult</Text>
                  <Box id="join-card1-image-div">
                    <Image
                      id="join-card1-image"
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_600,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/join-the-cult/career-icons-v2.png"
                    />
                  </Box>
                  <Button id="join-card-btn">LEARN MORE</Button>
                </Flex>
              </Card>
            </Box>
            <Box className="join-cards" w={["90vw","90vw","90vw","40vw",]}>
              <Card
                className="join-card"
                id="join-card2"
                backgroundColor="transparent"
                borderRadius="35px"
                p={1}
                
              >
                <Flex id="join-card-inner">
                  <Text id="join-card2-text1">z.fit franchise</Text>
                  <Text id="join-card2-text1">opportunities</Text>
                  <Text id="join-card2-text2">
                    Partner with largest fitness brand in India
                  </Text>
                  <Button id="join-card-btn">LEARN MORE</Button>
                </Flex>
              </Card>
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* ------------------ */}

      {/* We Are Cult Div */}
      <Box className="cult-div">
        <Box id="cult-text-div">
          <Text id="cult-text">
            At z.fit, we make group workouts fun, daily food healthy & tasty,
            mental fitness easy with yoga & meditation, and medical & lifestyle
            care hassle-free.
          </Text>
          <Text id="cult-text">#BeBetterEveryday</Text>
        </Box>
      </Box>
      {/* ---------------- */}

      <MoveToTopButton/>
    </div>
    }
    </div>
  );
};

export default Homepage;
