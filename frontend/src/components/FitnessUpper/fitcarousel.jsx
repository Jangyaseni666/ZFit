import React, { useState } from "react";
import { Carousel, Stack } from "react-bootstrap";
import { Box, Flex, Text, Spacer, Heading } from "@chakra-ui/react";
import FitCount from "./fitcount";

const FitCarousel = () => {
  return (
    <Box textAlign={"center"} backgroundColor={"#070B11"} p={"10%"}>
      <Box w={"80%"} mx={"10%"} my='-10'>
        <Carousel controls="" >
          <Carousel.Item>
            <Box
              w="100%"
              h="40%"
              bgColor={"#3F2E1B"}
              px={10}
              pt={3}
              borderRadius={"2xl"}
            >
              <Text color={"#D9D5D1"}>
                <Flex>
                  <Flex flexDir={"column"} textAlign={"left"} justify={"center"}>
                    <Heading size={"md"}>
                      EXTRA ₹500 OFF + FREE 2.5 MONTHS EXTENSION
                    </Heading>
                    <Text>on cultpass ELITE</Text>
                  </Flex>
                  <Spacer />
                  <Box mr={"5%"} mt={"1%"}>
                    <Text fontSize={"150%"} m={0} borderY={"1px solid white"}>
                      Ends In
                    </Text>
                    <FitCount initialSeconds={43200} />
                  </Box>
                </Flex>
              </Text>
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box
              w="100%"
              h="40%"
              bgColor={"#3D3F44"}
              px={10}
              pt={3}
              borderRadius={"2xl"}
            >
              <Text color={"#D8D9DA"}>
                <Flex>
                  <Flex flexDir={"column"} textAlign={"left"} justify={"center"}>
                    <Heading size={"md"}>
                      EXTRA ₹500 OFF + FREE 2.5 MONTHS EXTENSION
                    </Heading>
                    <Text>on cultpass PRO</Text>
                  </Flex>
                  <Spacer />
                  <Box mr={"5%"} mt={"1%"}>
                    <Text fontSize={"150%"} m={0} borderY={"1px solid white"}>
                      Ends In
                    </Text>
                    <FitCount initialSeconds={43200} />
                  </Box>
                </Flex>
              </Text>
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box
              w="100%"
              h="40%"
              bgGradient="linear(to-l, #E5BBE0, #E2A7BF)"
              px={10}
              pt={3}
              borderRadius={"2xl"}
            >
              <Text color={"#FAF2F9"}>
                <Flex>
                  <Flex flexDir={"column"} textAlign={"left"} justify={"center"}>
                    <Heading size={"md"}>
                      5 MONTHS FREE EXTENSION + 500 OFF
                    </Heading>
                    <Text>on cultpass HOME</Text>
                  </Flex>
                  <Spacer />
                  <Box mr={"5%"} mt={"1%"}>
                    <Text fontSize={"150%"} m={0} borderY={"1px solid white"}>
                      Ends In
                    </Text>
                    <FitCount initialSeconds={43200} />
                  </Box>
                </Flex>
              </Text>
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box
              w="100%"
              h="40%"
              bgColor={"#2F3642"}
              px={10}
              pt={3}
              borderRadius={"2xl"}
            >
              <Text color={"#D5D7D9"}>
                <Flex>
                  <Flex flexDir={"column"} textAlign={"left"} justify={"center"}>
                    <Heading size={"md"}>
                      EXTRA RE 1500 OFF + FREE 1000 AMAZOM VOUCHER
                    </Heading>
                    <Text>on cultpass TRANSFORM</Text>
                  </Flex>
                  <Spacer />
                  <Box mr={"5%"} mt={"1%"}>
                    <Text fontSize={"150%"} m={0} borderY={"1px solid white"}>
                      Ends In
                    </Text>
                    <FitCount initialSeconds={43200} />
                  </Box>
                </Flex>
              </Text>
            </Box>
          </Carousel.Item>
        </Carousel>
      </Box>
    </Box>
  );
};

export default FitCarousel;
