import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  List,
  ListItem,
  Button,
  Box,
  Image,
  Flex,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Spacer,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Input,
  useToast,
} from "@chakra-ui/react";

function ZPassPro() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handlepay = () => {
    toast({
      title: "Payment Successful",
      description: "You have Subscribed to z.fit PRO plan.",
      status: "success",
      variant: "top-accent",
      duration: 10000,
      isClosable: true,
    });
  };
  const home1 = useDisclosure();
  const home2 = useDisclosure();
  const home3 = useDisclosure();
  return (
    <Box bg="#0f1b2b">
      <Center py={10}>
        <Flex gap={3}>
          <Text color="white" fontSize="5xl" fontWeight="bold">
            z.fit
          </Text>
          <Image src="cult-pass-pro-partial.webp" maxH="72px" py={3.5} />
        </Flex>
      </Center>
      <SimpleGrid
        spacing={10}
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3,1fr)"]}
        p={10}
      >
        <Card align="center" bg="gray.700" color="white">
          <CardHeader>
            <Heading size="2xl">12 Months</Heading>
          </CardHeader>
          <CardBody>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              //   color="gray.400"
              bgGradient="linear(to-r, #666670, #eeedef, #666670)"
              bgClip="text"
            >
              ₹8290
            </Text>
            <Text fontSize="lg" fontWeight="bold" pb={10}>
              (₹572/month)
            </Text>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>+ Only Today | Free 2.5 months extension</ListItem>
              <ListItem>+ Only Today | Extra ₹500 OFF applied</ListItem>
              <ListItem>+ 1 more Offer</ListItem>
            </List>
          </CardBody>
          <CardFooter pb={10}>
            <Button color="blackAlpha.700" onClick={home1.onOpen}>
              Buy Now
            </Button>
            <Modal isOpen={home1.isOpen} onClose={home1.onClose} size={"2xl"}>
              <ModalOverlay />
              <ModalContent bgColor={"#15171c"}>
                <ModalHeader>
                  <Heading textAlign={"center"} color={"white"}>
                    Payment
                  </Heading>
                </ModalHeader>
                <ModalCloseButton color={"white"} />
                <ModalBody>
                  <Box
                    my={"2%"}
                    mx={"5%"}
                    w={["90%", "90%", "90%", "90%"]}
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
                            <Heading size={"md"}>₹ {8290}</Heading>
                          </Flex>
                          <Flex>
                            <Text>gst* (5%) : </Text>
                            <Spacer /> +
                            <Heading size={"md"}>₹ {8290 * 0.05} </Heading>
                          </Flex>
                          <Divider />
                          <Flex>
                            <Text>total: </Text>
                            <Spacer />
                            <Heading size={"md"}>₹ {8290 * 1.05} </Heading>
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
                        Total ₹ {8290 * 1.05}
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
                                      <Input
                                        type="month"
                                        variant={"flushed"}
                                        mx={1}
                                      />
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
                        onClick={handlepay}
                      >
                        ₹ {8290 * 1.05}
                      </Button>
                    </Box>
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </CardFooter>
        </Card>
        <Card align="center" bg="gray.700" color="white">
          <CardHeader>
            <Heading size="2xl"> 6 Months</Heading>
          </CardHeader>
          <CardBody>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              //   color="gray.400"
              bgGradient="linear(to-r, #666670, #eeedef, #666670)"
              bgClip="text"
            >
              ₹6690
            </Text>
            <Text fontSize="lg" fontWeight="bold" pb={10}>
              (₹836/month)
            </Text>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>+ Free 2 months extension</ListItem>
              <ListItem>+ Only Today | Extra ₹500 OFF applied</ListItem>
              <ListItem>+ 1 more Offer</ListItem>
            </List>
          </CardBody>
          <CardFooter pb={10}>
            <Button color="blackAlpha.700" onClick={home2.onOpen}>
              Buy Now
            </Button>
            <Modal isOpen={home2.isOpen} onClose={home2.onClose} size={"2xl"}>
              <ModalOverlay />
              <ModalContent bgColor={"#15171c"}>
                <ModalHeader>
                  <Heading textAlign={"center"} color={"white"}>
                    Payment
                  </Heading>
                </ModalHeader>
                <ModalCloseButton color={"white"} />
                <ModalBody>
                  <Box
                    my={"2%"}
                    mx={"5%"}
                    w={["90%", "90%", "90%", "90%"]}
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
                            <Heading size={"md"}>₹ {6690}</Heading>
                          </Flex>
                          <Flex>
                            <Text>gst* (5%) : </Text>
                            <Spacer /> +
                            <Heading size={"md"}>₹ {6690 * 0.05} </Heading>
                          </Flex>
                          <Divider />
                          <Flex>
                            <Text>total: </Text>
                            <Spacer />
                            <Heading size={"md"}>₹ {6690 * 1.05} </Heading>
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
                        Total ₹ {6690 * 1.05}
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
                                      <Input
                                        type="month"
                                        variant={"flushed"}
                                        mx={1}
                                      />
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
                        onClick={handlepay}
                      >
                        ₹ {6690 * 1.05}
                      </Button>
                    </Box>
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </CardFooter>
        </Card>
        <Card align="center" bg="gray.700" color="white">
          <CardHeader>
            <Heading size="2xl"> 3 Months</Heading>
          </CardHeader>
          <CardBody>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              //   color="gray.400"
              bgGradient="linear(to-r, #666670, #eeedef, #666670)"
              bgClip="text"
            >
              ₹5390
            </Text>
            <Text fontSize="lg" fontWeight="bold" pb={10}>
              (₹1198/month)
            </Text>

            <List spacing={3} textAlign="start" px={12}>
              <ListItem>+ Only Today | Free 2.5 months extension</ListItem>
              <ListItem>+ Only Today | Extra ₹500 OFF applied</ListItem>
              <ListItem>+ 1 more Offer</ListItem>
            </List>
          </CardBody>
          <CardFooter pb={10}>
            <Button color="blackAlpha.700" onClick={home3.onOpen}>
              Buy Now
            </Button>
            <Modal isOpen={home3.isOpen} onClose={home3.onClose} size={"2xl"}>
              <ModalOverlay />
              <ModalContent bgColor={"#15171c"}>
                <ModalHeader>
                  <Heading textAlign={"center"} color={"white"}>
                    Payment
                  </Heading>
                </ModalHeader>
                <ModalCloseButton color={"white"} />
                <ModalBody>
                  <Box
                    my={"2%"}
                    mx={"5%"}
                    w={["90%", "90%", "90%", "90%"]}
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
                            <Heading size={"md"}>₹ {5390}</Heading>
                          </Flex>
                          <Flex>
                            <Text>gst* (5%) : </Text>
                            <Spacer /> +
                            <Heading size={"md"}>₹ {5390 * 0.05} </Heading>
                          </Flex>
                          <Divider />
                          <Flex>
                            <Text>total: </Text>
                            <Spacer />
                            <Heading size={"md"}>₹ {5390 * 1.05} </Heading>
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
                        Total ₹ {5390 * 1.05}
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
                                      <Input
                                        type="month"
                                        variant={"flushed"}
                                        mx={1}
                                      />
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
                        onClick={handlepay}
                      >
                        ₹ {5390 * 1.05}
                      </Button>
                    </Box>
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export default ZPassPro;
