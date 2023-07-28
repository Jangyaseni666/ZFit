import React from "react";
import { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, Spacer, Input } from "@chakra-ui/react";

function Pay_item({ id }) {
  const [getItem, setGetItem] = useState([]);
  let date = new Date().toJSON().slice(0, 10);
  console.log(date);

  const get_item = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}care/product${id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setGetItem(data[0]);
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

  useEffect(() => {
    get_item();
  }, []);

  return (
    <Box fontFamily={"inter"} borderY={"1px solid black"}>
      <Flex p={"1%"}>
        <Box>
          <Heading size={"md"} fontFamily={"inter"}>
            {getItem.title}
          </Heading>
          <Text>{getItem.test_no} tests</Text>
        </Box>
        <Spacer />
        <Box w={"40%"}>
          <Heading size={"md"} textAlign={"center"}>
            {getItem.offer_price}
          </Heading>
          <Flex>
            <Text my={"3%"}>Test date: </Text>
            <Input
            mx={"1%"}
              variant="outline"
              type="date"
              id="tdate"
              w={"60%"}
              isRequired
              min={date}
              className="sdate"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Pay_item;
