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
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./at_home.css";

function At_home() {
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
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
        <Text as="samp" color={"#B9BABB"} fontFamily={"inter"}>
          AT-HOME
        </Text>
        <Heading mb={"2%"} color={"white"} fontFamily={"inter"}>
          Unlimited home workouts with calorie tracking
        </Heading>

        <Carousel responsive={responsive} className="card_car_home">
          <Card className="fit_card_home" bgColor={"#2D3745"}>
            <CardBody p={0}>
              <Text
                color={"white"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                p={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"60%"}
                fontFamily={"inter"}
              >
                30+LIVE
              </Text>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/dc41c7a7-bb43-45d2-a7a7-a1819db900f7"
                borderTopRadius="lg"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Text m={0} color={"#9A9B9C"}>
                  Rahul Huidrom
                </Text>
                <Heading size="md" color={"#FFFFFF"} fontFamily={"inter"}>
                  Cardio HEAT
                </Heading>
                <Text color={"#9A9B9C"}>CARDIO • INTERMEDIATE • 35 Min</Text>
              </Stack>
            </CardBody>
            <CardFooter display={"flex"} justify={"center"}>
              <Button
                variant="solid"
                bgColor={"#424B58"}
                color={"white"}
                _hover={{ bgColor: "gray.500" }}
              >
                <CircleIcon color="#4AB74A" />
                <Text my={"1%"} mx={"7%"}>
                  Join
                </Text>
              </Button>
            </CardFooter>
          </Card>
          <Card className="fit_card_home" bgColor={"#2D3745"}>
            <CardBody p={0}>
              <Text
                color={"white"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                p={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"60%"}
                fontFamily={"inter"}
              >
                26+LIVE
              </Text>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/2501ef7d-247e-4bde-a3bf-5c6bd508fb4e"
                borderTopRadius="lg"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Text m={0} color={"#9A9B9C"}>
                  Anurag V
                </Text>
                <Heading size="md" color={"#FFFFFF"} fontFamily={"inter"}>
                  Dance Fitness Xpress
                </Heading>
                <Text color={"#9A9B9C"}>DANCE • BEGINNER • 30 Min</Text>
              </Stack>
            </CardBody>
            <CardFooter display={"flex"} justify={"center"}>
              <Button
                variant="solid"
                bgColor={"#424B58"}
                color={"white"}
                _hover={{ bgColor: "gray.500" }}
              >
                <CircleIcon color="#4AB74A" />
                <Text my={"1%"} mx={"7%"}>
                  Join
                </Text>
              </Button>
            </CardFooter>
          </Card>
          <Card className="fit_card_home" bgColor={"#2D3745"}>
            <CardBody p={0}>
              <Text
                color={"white"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                p={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"60%"}
                fontFamily={"inter"}
              >
                26+LIVE
              </Text>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/9270fe1a-e37f-4b99-8f05-cc606584e3dc"
                borderTopRadius="lg"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Text m={0} color={"#9A9B9C"}>
                  Nandini Shetty
                </Text>
                <Heading size="md" color={"#FFFFFF"} fontFamily={"inter"}>
                  Dance Fitness Xtreme
                </Heading>
                <Text color={"#9A9B9C"}>DANCE • INTERMEDIATE • 50 Min</Text>
              </Stack>
            </CardBody>
            <CardFooter display={"flex"} justify={"center"}>
              <Button
                variant="solid"
                bgColor={"#424B58"}
                color={"white"}
                _hover={{ bgColor: "gray.500" }}
              >
                <CircleIcon color="#4AB74A" />
                <Text my={"1%"} mx={"7%"}>
                  Join
                </Text>
              </Button>
            </CardFooter>
          </Card>
          <Card className="fit_card_home" bgColor={"#2D3745"}>
            <CardBody p={0}>
              <Text
                color={"white"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                p={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"60%"}
              >
                32+LIVE
              </Text>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/b2c9f6fa-0e17-4ef6-85ac-d3964fe67c04"
                borderTopRadius="lg"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Text m={0} color={"#9A9B9C"}>
                  Shwetha Rahul
                </Text>
                <Heading size="md" color={"#FFFFFF"}>
                  Hatha Yoga for Beginners
                </Heading>
                <Text color={"#9A9B9C"}>YOGA • BEGINNER • 35 Min</Text>
              </Stack>
            </CardBody>
            <CardFooter display={"flex"} justify={"center"}>
              <Button
                variant="solid"
                bgColor={"#424B58"}
                color={"white"}
                _hover={{ bgColor: "gray.500" }}
              >
                <CircleIcon color="#4AB74A" />
                <Text my={"1%"} mx={"7%"}>
                  Join
                </Text>
              </Button>
            </CardFooter>
          </Card>
          <Card className="fit_card_home" bgColor={"#2D3745"}>
            <CardBody p={0}>
              <Text
                color={"white"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                p={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"60%"}
              >
                26+LIVE
              </Text>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/2b7438ee-db1b-4e25-829a-ab5ef2297dde"
                borderTopRadius="lg"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Text m={0} color={"#9A9B9C"}>
                  Ajay Sharma
                </Text>
                <Heading size="md" color={"#FFFFFF"} fontFamily={"inter"}>
                  Cardio HIIT
                </Heading>
                <Text color={"#9A9B9C"}>CARDIO • BEGINNER • 30 Min</Text>
              </Stack>
            </CardBody>
            <CardFooter display={"flex"} justify={"center"}>
              <Button
                variant="solid"
                bgColor={"#424B58"}
                color={"white"}
                _hover={{ bgColor: "gray.500" }}
              >
                <CircleIcon color="#4AB74A" />
                <Text my={"1%"} mx={"7%"}>
                  Join
                </Text>
              </Button>
            </CardFooter>
          </Card>
          <Card className="fit_card_home" h={"76.5%"} bgColor={"#2D3745"}>
            <CardBody p={0}>
              <Text
                color={"white"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                p={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"60%"}
              >
                34+LIVE
              </Text>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/5a88177b-fb2d-4063-a9c2-579c19103a71"
                borderTopRadius="lg"
                h={"52%"}
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Text m={0} color={"#9A9B9C"}>
                  Saleena
                </Text>
                <Heading size="md" color={"#FFFFFF"} fontFamily={"inter"}>
                  Vinyasa Yoga: Strength
                </Heading>
                <Text color={"#9A9B9C"}>YOGA • INTERMEDIATE • 50 Min</Text>
              </Stack>
            </CardBody>
            <CardFooter display={"flex"} justify={"center"}>
              <Button
                position={"relative"}
                bottom={"90%"}
                variant="solid"
                bgColor={"#424B58"}
                color={"white"}
                _hover={{ bgColor: "gray.500" }}
              >
                <CircleIcon color="#4AB74A" />
                <Text my={"1%"} mx={"7%"}>
                  Join
                </Text>
              </Button>
            </CardFooter>
          </Card>
          <Card className="fit_card_home" bgColor={"#2D3745"}>
            <CardBody p={0}>
              <Text
                color={"white"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                p={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"60%"}
              >
                34+LIVE
              </Text>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/b3bdcf74-4b0b-4b27-9a49-9df6ca40ecf3"
                borderTopRadius="lg"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Text m={0} color={"#9A9B9C"}>
                  Suvini Mehra
                </Text>
                <Heading size="md" color={"#FFFFFF"} fontFamily={"inter"}>
                  Strength Training: Full Body
                </Heading>
                <Text color={"#9A9B9C"}>EQUIPMENT • BEGINNER • 35 Min</Text>
              </Stack>
            </CardBody>
            <CardFooter display={"flex"} justify={"center"}>
              <Button
                variant="solid"
                bgColor={"#424B58"}
                color={"white"}
                _hover={{ bgColor: "gray.500" }}
              >
                <CircleIcon color="#4AB74A" />
                <Text my={"1%"} mx={"7%"}>
                  Join
                </Text>
              </Button>
            </CardFooter>
          </Card>
          <Card className="fit_card_home" bgColor={"#2D3745"}>
            <CardBody p={0}>
              <Text
                color={"white"}
                bgColor={"black"}
                position={"absolute"}
                m={1}
                p={1}
                px={2}
                borderRadius={"2xl"}
                opacity={"60%"}
              >
                24+LIVE
              </Text>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/2c666fa0-15a2-4b9b-beb1-c66fbeb74839"
                borderTopRadius="lg"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Text m={0} color={"#9A9B9C"}>
                  Sarita Y
                </Text>
                <Heading size="md" color={"#FFFFFF"} fontFamily={"inter"}>
                  Strength & Conditioning: Full Body
                </Heading>
                <Text color={"#9A9B9C"}>SNC • INTERMEDIATE • 30 Min</Text>
              </Stack>
            </CardBody>
            <CardFooter display={"flex"} justify={"center"}>
              <Button
                variant="solid"
                bgColor={"#424B58"}
                color={"white"}
                _hover={{ bgColor: "gray.500" }}
              >
                <CircleIcon color="#4AB74A" />
                <Text my={"1%"} mx={"7%"}>
                  Join
                </Text>
              </Button>
            </CardFooter>
          </Card>
        </Carousel>
      </Box>
    </>
  );
}

export default At_home;
