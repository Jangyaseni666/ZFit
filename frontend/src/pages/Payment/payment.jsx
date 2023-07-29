import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Card, CardBody, Stack, StackDivider, Button } from "@chakra-ui/react";
import Pay_item from "../../components/pay_item";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function Payment() {
  // localStorage.setItem("user_id", 1);
  const uid = localStorage.getItem("userid");
  const [cartItem, setCartItem] = useState([]);
  const [tot_sum, setTot_sum] = useState(0);
  const navigate = useNavigate();
  const toast = useToast();

  const get_cart = async () => {
    const token=await localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}history/cart${uid}`,
      {
        method: "GET",
        headers: {
          Authorization: JSON.parse(token),
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setCartItem(data);
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

  useEffect(() => {
    get_cart();
    setTot_sum(localStorage.getItem("tot_sum"));
  }, []);

  const pay_verify = async() => {
    const token= await localStorage.getItem("token");
    await cartItem.map(async(el) => {
      const dataobj = {
        in_cart: false,
      };
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}history/${el._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(token),
          },
          body: JSON.stringify(dataobj),
        }
      );
      if (response.ok === true) {
        toast({
          title: "Payment successful",
          description: "test is booked",
          status: "success",
          duration: 9000,
          isClosable: true,
          variant: "top-accent",
        });
        navigate("/");
      }
    });
  };

  return (
    <Box backgroundColor={"#15171C"} h={"100vh"} fontFamily={"inter"}>
      <Heading
        size={"lg"}
        textAlign={"center"}
        color={"white"}
        fontFamily={"inter"}
      >
        Payment
      </Heading>
      <Divider />

      <Flex direction={["column", "column", "column", "row"]}>
        <Box w={["90%", "90%", "90%", "60%"]}>
          <Card my={"2%"} mx={"5%"} bgColor={"#1E2148"} color={"white"}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                {cartItem.map((el) => {
                  return <Pay_item id={el.pid} />;
                })}
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box
          my={"2%"}
          mx={"5%"}
          w={["90%", "90%", "90%", "30%"]}
          display={["flex", "flex", "flex", "block"]}
        >
          <Card
            bgColor={"#242852"}
            color={"white"}
            minW={["40%", "40%", "40%", "100%"]}
            mr={["10%", "10%", "10%", "0%"]}
          >
            <CardBody>
              <Stack spacing={"4"}>
                <Flex>
                  <Text>subTotal : </Text>
                  <Spacer />
                  <Heading size={"md"}>₹ {tot_sum}</Heading>
                </Flex>
                <Flex>
                  <Text>gst* (5%) : </Text>
                  <Spacer /> +<Heading size={"md"}>₹ {tot_sum * 0.05} </Heading>
                </Flex>
                <Divider />
                <Flex>
                  <Text>total: </Text>
                  <Spacer />
                  <Heading size={"md"}>₹ {tot_sum * 1.05} </Heading>
                </Flex>
              </Stack>
            </CardBody>
          </Card>

          <Box mt={"5%"} minW={["40%", "40%", "40%", "100%"]}>
            <Heading
              size={"md"}
              fontFamily={"inter"}
              textAlign={"center"}
              color={"white"}
            >
              Total ₹ {tot_sum * 1.05}
            </Heading>
            <Card bgColor={"#1E2148"} color={"white"}>
              <Accordion>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="center">
                        Pay on Site
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    bgColor={"#242852"}
                    borderTop={"1px solid white"}
                  >
                    <Input
                      type="text"
                      variant={"flushed"}
                      placeholder="Enter site name"
                    />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="center">
                        Pay Online
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} bgColor={"#242852"}>
                    <Box>
                      <Flex>
                        <Text w={"40%"}>Card Number:</Text>
                        <Input
                          type="text"
                          variant={"flushed"}
                          mx={1}
                          w={"45%"}
                          p={1}
                          maxLength={"4"}
                        />
                        <Input
                          type="text"
                          variant={"flushed"}
                          mx={1}
                          w={"45%"}
                          p={1}
                          maxLength={"4"}
                        />
                        <Input
                          type="text"
                          variant={"flushed"}
                          mx={1}
                          w={"45%"}
                          p={1}
                          maxLength={"4"}
                        />
                        <Input
                          type="text"
                          variant={"flushed"}
                          mx={1}
                          w={"45%"}
                          p={1}
                          maxLength={"4"}
                        />
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                        <Box>
                          <Flex>
                            <Text mt={"3%"}>Expiry:</Text>
                            <Input type="month" variant={"flushed"} mx={1} />
                          </Flex>
                        </Box>
                        <Box>
                          <Flex>
                            <Text mt={"3%"}>CVC:</Text>
                            <Input
                              type="text"
                              variant={"flushed"}
                              mx={1}
                              maxLength={"3"}
                            />
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Card>
            <Button
              colorScheme="blue"
              w={"100%"}
              mt={"5%"}
              onClick={pay_verify}
            >
              ₹ {tot_sum * 1.05}
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Payment;
