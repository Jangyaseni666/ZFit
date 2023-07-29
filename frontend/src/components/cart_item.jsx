import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  Divider,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

function Cart_item({ id, _id }) {
  const [getItem, setGetItem] = useState([]);
  const toast = useToast();

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

  const delete_item = async () => {
    const token = await localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}history/delete/${_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: JSON.parse(token),
        },
      }
    );
    console.log(response);
    if (response.ok) {
      toast({
        title: "Item deleted",
        description: "Item is deleted from cart",
        status: "success",
        duration: 9000,
        isClosable: true,
        variant: "top-accent",
      });
      window.location.reload();
    }
  };

  return (
    <Box fontFamily={"inter"}>
      <Flex>
        <Box>
          <Heading size={"md"} fontFamily={"inter"}>
            {getItem.title}
          </Heading>
          <Text>{getItem.test_no} tests</Text>
        </Box>
        <Spacer />
        <Box>
          <Heading size={"md"}>{getItem.offer_price}</Heading>
          <Button colorScheme="red" onClick={delete_item}>
            <DeleteIcon />
          </Button>
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
}

export default Cart_item;
