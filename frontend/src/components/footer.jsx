import React from "react";
import { Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <Flex
      bg="black"
      color="grey"
      padding="50px"
      direction={["column", "column", "row"]}
    >
      <Box flex="4" align="left">
        <Image
          src="fit-removebg-preview.png"
          alt="z.fit"
          mb={"10%"}
          maxH={100}
        />
        <Text>
          At z.fit, we make group workouts fun, daily food healthy & tasty,
          mental fitness easy with yoga & meditation, Medical & lifestyle care
          hassle-free. #BeBetterEveryDay
        </Text>
      </Box>
      <Spacer />
      <Box flex="2" align="left">
        <Flex direction="column" justify="space-between">
          <Text mb={"5%"}>z.fit for business</Text>
          <Text mb={"5%"}>z.fit franchise</Text>
          <Text mb={"5%"}>corporate partnerships</Text>
          <Text mb={"5%"}>z pass network</Text>
          <Text mb={"5%"}>t&c for business</Text>
        </Flex>
      </Box>
      <Spacer />
      <Box flex="1" align="left">
        <Flex direction="column" justify="space-between">
          <Text mb={"10%"}>partner.fit</Text>
          <Text mb={"10%"}>blogs</Text>
          <Text mb={"10%"}>security</Text>
          <Text mb={"10%"}>careers</Text>
        </Flex>
      </Box>
      <Spacer />
      <Box flex="2" align="left">
        <Flex direction="column" justify="space-between">
          <Text mb={"5%"}>contact us</Text>
          <Text mb={"5%"}>privacy policy</Text>
          <Text mb={"5%"}>z bmi calculator</Text>
          <Text mb={"5%"}>terms & conditions</Text>
        </Flex>
      </Box>
      <Spacer />
      <Box flex="2" align="left">
        <Flex direction="column" justify="space-between">
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/appstore.svg"
            alt="app_store"
            style={{ width: "250px", height: "auto" }}
            my={"5%"}
          />
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/googleplay.svg"
            alt="play_store"
            style={{ width: "250px", height: "auto" }}
            my={"5%"}
          />
          <Flex justify="space-between" my={"5%"}>
            <FaYoutube size={25} color="white" />
            <FaFacebook size={25} color="white" />
            <FaTwitter size={25} color="white" />
            <FaInstagram size={25} color="white" />
            <FaLinkedin size={25} color="white" />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Footer;
