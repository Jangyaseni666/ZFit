import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import "./Card_care.css";
import { useNavigate } from "react-router-dom";


function Card_care({ img, price, offer_price, id }) {
  const navigate = useNavigate();

  const fulldesc=(id)=>{
    localStorage.setItem("care_id",id);
    navigate("/product");
  }

  return (
    <Card onClick={()=>fulldesc(id)}
      maxW="sm"
      h={"100%"}
      shadow={0}
      _horizontal={{ scale: [0.9] }}
      className="ccard"
    >
      <CardBody p={0}>
        <Image
          src={img}
          alt="error"
          borderRadius="10px"
          objectFit={"cover"}
          objectPosition={"10%"}
          w={"100%"}
          h={"75%"}
          _hover={{ boxShadow: "base" }}
        />
        <Stack mt="6" spacing="3" px={"5%"}>
          {price == "" ? (
            <>
              <Text m={0}>
                <Flex>
                  <Box>Offer Price:</Box>
                  <Spacer />
                  <Box>
                    <b>{offer_price}</b>
                  </Box>
                </Flex>
              </Text>
            </>
          ) : (
            <>
              <Text m={0}>
                <Flex>
                  <Box>Price:</Box>
                  <Spacer />
                  <Box as="s" color={"lightgray"}>
                    {price}
                  </Box>
                </Flex>
              </Text>
              <Text m={0}>
                <Flex>
                  <Box>Offer Price:</Box>
                  <Spacer />
                  <Box>
                    <b>{offer_price}</b>
                  </Box>
                </Flex>
              </Text>
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Card_care;
