import React from "react";
import {
  Box,
  Image,
  Card,
  CardBody,
  Text,
  Stack,
  Button,
  Heading,
  CardFooter,
  Flex,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./fit_video.css";
import { MdStars } from "react-icons/md";
import VideoPlayer from "./vidplayer";

function Fit_video() {
  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Box
        textAlign={"center"}
        backgroundColor={"#070B11"}
        p={10}
        fontFamily={"inter"}
      >
        <Heading mb={"2%"} color={"white"} fontFamily={"inter"}>
          CENTERS
        </Heading>

        <Carousel responsive={responsive} className="card_car">
          <Card className="fit_card" bgColor={"#2F3237"}>
            <CardBody p={0}>
              <Flex
                color={"#DEDEDE"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"80%"}
                fontFamily={"inter"}
              >
                <Box pt={"7%"} mr={1}>
                  <MdStars />
                </Box>
                PRO
              </Flex>
              <VideoPlayer
                videoSrc="https://cdn-media.cure.fit/image/gymfit/centers/prod/CENTER60/video/gymfit/f8994358-0872-4309-afc8-66eb2529f705CENTER_60_APP_VIDEO.mp4"
                thumbnailSrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,fl_progressive,f_auto,q_auto:eco/dpr_2/image/gymfit/centers/CENTER60/61ab33b2-13e1-41bc-afbf-d9ace9f9c5a9._DSC7998"
              />
              <Flex>
                <Stack mt="6" spacing="3" textAlign={"left"} px={"5%"}>
                  <Heading size="xl" color={"#FFFFFF"} fontFamily={"inter"}>
                    FUERZA
                  </Heading>
                  <Text color={"#9A9B9C"}>HSR Layout • Gym</Text>
                </Stack>
                <Spacer />
                <Button
                  variant="solid"
                  bgColor={"#44474B"}
                  color={"white"}
                  _hover={{ bgColor: "gray.500" }}
                  mt={"9%"}
                  mr={"5%"}
                >
                  <Text my={"1%"} mx={"7%"}>
                    TRY FOR FREE
                  </Text>
                </Button>
              </Flex>
            </CardBody>
            <Divider my={0} color={"#9A9B9C"} mx={"5%"} w={"90%"} />
            <CardFooter>
              <Text ml={"2%"} color={"#828282"}>
                Unlimited access starting at ₹545/mo
              </Text>
            </CardFooter>
          </Card>
          <Card className="fit_card" bgColor={"#2F3237"}>
            <CardBody p={0}>
              <Flex
                color={"#DEDEDE"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"80%"}
                fontFamily={"inter"}
              >
                <Box pt={"7%"} mr={1}>
                  <MdStars />
                </Box>
                PRO
              </Flex>
              <VideoPlayer
                videoSrc="https://cdn-media.cure.fit/image/gymfit/centers/prod/CENTER45/video/gymfit/04ffff83-2118-4224-8dbe-2806558d89aeCENTER_45_APP_VIDEO.mp4"
                thumbnailSrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,fl_progressive,f_auto,q_auto:eco/dpr_2/image/gymfit/centers/CENTER45/e4c3bbf7-4e7e-4e0d-90c6-a58fb6b4b1c0.jpg"
              />
              <Flex>
                <Stack mt="6" spacing="3" textAlign={"left"} px={"5%"}>
                  <Heading size="xl" color={"#FFFFFF"} fontFamily={"inter"}>
                    ZEST FITNESS
                  </Heading>
                  <Text color={"#9A9B9C"}>HSR Layout • Gym</Text>
                </Stack>
                <Spacer />
                <Button
                  variant="solid"
                  bgColor={"#44474B"}
                  color={"white"}
                  _hover={{ bgColor: "gray.500" }}
                  mt={"9%"}
                  mr={"5%"}
                >
                  <Text my={"1%"} mx={"7%"}>
                    TRY FOR FREE
                  </Text>
                </Button>
              </Flex>
            </CardBody>
            <Divider my={0} color={"#9A9B9C"} mx={"5%"} w={"90%"} />
            <CardFooter>
              <Text ml={"2%"} color={"#828282"}>
                Unlimited access starting at ₹545/mo
              </Text>
            </CardFooter>
          </Card>
          <Card className="fit_card" bgColor={"#2F3237"}>
            <CardBody p={0}>
              <Flex
                color={"#DEDEDE"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"80%"}
                fontFamily={"inter"}
              >
                <Box pt={"7%"} mr={1}>
                  <MdStars />
                </Box>
                PRO
              </Flex>
              <VideoPlayer
                videoSrc="https://cdn-media.cure.fit/image/gymfit/centers/prod/CENTER134/video/gymfit/2230f06b-9d68-4fae-a820-72043b75396ePlay_on_Fitness_-_HSR.mp4"
                thumbnailSrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,fl_progressive,f_auto,q_auto:eco/dpr_2/image/gymfit/centers/prod/CENTER134/7f22613a-440a-4281-a4fa-4a62ed9a7f96_DSC1213.jpg"
              />
              <Flex>
                <Stack mt="6" spacing="3" textAlign={"left"} px={"5%"}>
                  <Heading size="xl" color={"#FFFFFF"} fontFamily={"inter"}>
                    PLAY ON FITNESS
                  </Heading>
                  <Text color={"#9A9B9C"}>HSR Layout • Gym</Text>
                </Stack>
                <Spacer />
                <Button
                  variant="solid"
                  bgColor={"#44474B"}
                  color={"white"}
                  _hover={{ bgColor: "gray.500" }}
                  mt={"9%"}
                  mr={"5%"}
                >
                  <Text my={"1%"} mx={"7%"}>
                    TRY FOR FREE
                  </Text>
                </Button>
              </Flex>
            </CardBody>
            <Divider my={0} color={"#9A9B9C"} mx={"5%"} w={"90%"} />
            <CardFooter>
              <Text ml={"2%"} color={"#828282"}>
                Unlimited access starting at ₹545/mo
              </Text>
            </CardFooter>
          </Card>

          <Card className="fit_card" bgColor={"#2F3237"}>
            <CardBody p={0}>
              <Flex
                color={"#E8C874"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"80%"}
                fontFamily={"inter"}
              >
                <Box pt={"7%"} mr={1}>
                  <MdStars />
                </Box>
                ELITE
              </Flex>
              <VideoPlayer
                videoSrc="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_3_VIDEO_faa28da3-5f1f-40d2-b0d0-e1851f76fe31.mp4"
                thumbnailSrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,fl_progressive,f_auto,q_auto:eco/dpr_2/v1/cult-media/v2web/centers/3_Cult_HSR_PRODUCT_BNR_2018-08-10T12:18:41.704Z.png"
              />
              <Flex>
                <Stack mt="6" spacing="3" textAlign={"left"} px={"5%"}>
                  <Heading size="xl" color={"#FFFFFF"} fontFamily={"inter"}>
                    CULT HSR
                  </Heading>
                  <Text color={"#9A9B9C"}>HSR Layout • Group Classes</Text>
                </Stack>
                <Spacer />
                <Button
                  variant="solid"
                  bgColor={"#44474B"}
                  color={"white"}
                  _hover={{ bgColor: "gray.500" }}
                  mt={"9%"}
                  mr={"5%"}
                >
                  <Text my={"1%"} mx={"7%"}>
                    TRY FOR FREE
                  </Text>
                </Button>
              </Flex>
            </CardBody>
            <Divider my={0} color={"#9A9B9C"} mx={"5%"} w={"90%"} />
            <CardFooter>
              <Text ml={"2%"} color={"#828282"}>
                Unlimited access starting at ₹833/mo
              </Text>
            </CardFooter>
          </Card>
          <Card className="fit_card" bgColor={"#2F3237"}>
            <CardBody p={0}>
              <Flex
                color={"#E8C874"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"80%"}
                fontFamily={"inter"}
              >
                <Box pt={"7%"} mr={1}>
                  <MdStars />
                </Box>
                ELITE
              </Flex>
              <VideoPlayer
                videoSrc="https://cdn-videos.cure.fit/www-curefit-com/video/upload/cult-media/v2web/centers/center_220_VIDEO_f602625f-691a-4827-b427-a69c5dd17b2f.mp4"
                thumbnailSrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,fl_progressive,f_auto,q_auto:eco/dpr_2/v1/cult-media/v2web/centers/220_Cult_HSR%2024th%20Main%20_PRODUCT_BNR_2021-11-09T09:52:29.369Z.png"
              />
              <Flex>
                <Stack mt="6" spacing="3" textAlign={"left"} px={"5%"}>
                  <Heading size="lg" color={"#FFFFFF"} fontFamily={"inter"}>
                    CULT HSR 24TH MAIN
                  </Heading>
                  <Text color={"#9A9B9C"}>HSR Layout • Group Classes</Text>
                </Stack>
                <Spacer />
                <Button
                  variant="solid"
                  bgColor={"#44474B"}
                  color={"white"}
                  _hover={{ bgColor: "gray.500" }}
                  mt={"9%"}
                  mr={"5%"}
                >
                  <Text my={"1%"} mx={"7%"}>
                    TRY FOR FREE
                  </Text>
                </Button>
              </Flex>
            </CardBody>
            <Divider my={0} color={"#9A9B9C"} mx={"5%"} w={"90%"} />
            <CardFooter>
              <Text ml={"2%"} color={"#828282"}>
                Unlimited access starting at ₹833/mo
              </Text>
            </CardFooter>
          </Card>
        </Carousel>
      </Box>
    </>
  );
}

export default Fit_video;
