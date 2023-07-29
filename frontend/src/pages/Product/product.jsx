import React from "react";
import { useState, useEffect } from "react";
import { CardHeader, Divider, useDisclosure } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Spacer } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { FaFlaskVial } from "react-icons/fa6";
import { AiFillTag } from "react-icons/ai";
import { PiTestTubeFill } from "react-icons/pi";
import { BsClipboard2Pulse } from "react-icons/bs";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function Product() {
  const id = localStorage.getItem("care_id");
  // localStorage.setItem("user_id", 1);
  const uid = localStorage.getItem("userid");
  const [getdesc, setGetdesc] = useState([]);

  const get_desc = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}care/product${id}`,
      {
        method: "GET",
      }
    );
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data[0]);
      setGetdesc(data[0]);
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

  useEffect(() => {
    get_desc();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal2 = useDisclosure();
  const toast = useToast();

  const add_cart = async() => {
    const token = await localStorage.getItem("token");
    const dataobj = await {
      pid: id,
      uid: uid,
      in_cart: true,
      cost: getdesc.offer_price,
    };
    await fetch(`${process.env.REACT_APP_BASE_URL}history`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: JSON.parse(token),
      },
      body: JSON.stringify(dataobj),
    }).then((res) => {
      console.log(res);
      toast({
        title: "Test added",
        description: "Your test is added to Cart",
        status: "success",
        duration: 9000,
        isClosable: true,
        variant: "top-accent",
      });
    });
  };

  return (
    <>
      <Box>
        <Flex gap={10}>
          <Box
            my={10}
            ml={"10%"}
            w={"30%"}
            display={["none", "none", "none", "block"]}
          >
            <Image
              src={getdesc.img_src} //change here
              alt="error"
              borderRadius="10px"
              w={"100%"}
              h={"90%"}
              objectFit={"cover"}
              objectPosition={"10%"}
            />
          </Box>
          <Box m={10} width={["100%", "100%", "100%", "40%"]}>
            <Box
              display={["block", "block", "none", "none"]}
              pr={"10"}
              position={"absolute"}
              zIndex={0}
            >
              <Image
                src={getdesc.img_src_full}
                alt="error"
                borderRadius="10px"
              />
            </Box>
            <Breadcrumb
              display={["none", "none", "block", "block"]}
              separator={">"}
            >
              <BreadcrumbItem color={"gray.400"}>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem color={"gray.300"}>
                <BreadcrumbLink href="/care">Care</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage color={"white"}>
                <BreadcrumbLink href="#">{getdesc.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Card
              shadow={"lg"}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              mt={["25%", "25%", 0, 0]}
            >
              <Box display={["none", "none", "block", "none"]} p={5}>
                <Image
                  src={getdesc.img_src}
                  alt="error"
                  borderRadius="10px"
                  h={"90%"}
                  objectFit={"cover"}
                  objectPosition={"10%"}
                />
              </Box>
              <Stack>
                <CardHeader mb={0}>
                  <Box display={["block", "block", "none", "none"]}>
                    <Breadcrumb separator={">"}>
                      <BreadcrumbItem color={"gray"}>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>

                      <BreadcrumbItem color={"gray"}>
                        <BreadcrumbLink href="/">Care</BreadcrumbLink>
                      </BreadcrumbItem>

                      <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">
                          {getdesc.title}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </Breadcrumb>
                  </Box>
                </CardHeader>
                <CardBody>
                  <Flex mb={"2%"} direction={["column", "row", "row", "row"]}>
                    <Heading size="lg" w={["100%", "70%", "70%", "70%"]}>
                      {getdesc.title}
                    </Heading>
                    <Spacer />
                    <Text
                      m={"2%"}
                      size="md"
                      as={"s"}
                      color={"lightgray"}
                      mr={"2%"}
                    >
                      {getdesc.price}
                    </Text>
                    <Heading my={"2%"} size="md">
                      {getdesc.offer_price}
                    </Heading>
                  </Flex>
                  <Text py="2" color={"darkgray"}>
                    {getdesc.desc}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Flex w={"100%"}>
                    <Box>
                      <Flex color={"darkgray"}>
                        <TimeIcon m={1} />
                        <Text pl={1}>{getdesc.test_no} Tests</Text>
                      </Flex>
                      <Flex color={"darkgray"}>
                        <Text m={1}>
                          <FaFlaskVial />
                        </Text>
                        <Text pl={1}>
                          Report Ready in {getdesc.test_time} Hrs
                        </Text>
                      </Flex>
                    </Box>
                    <Spacer />
                    <Box>
                      <Button
                        m={1}
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        color={"white"}
                        borderRadius={"50px"}
                        _hover={{
                          shadow: "lg",
                          bgGradient: "linear(to-r, #FF3C9E, #7D41BA)",
                        }}
                        onClick={() => {
                          add_cart();
                        }}
                      >
                        Buy Now
                      </Button>
                    </Box>
                  </Flex>
                </CardFooter>
              </Stack>
            </Card>
            <Card
              my={10}
              bgGradient="linear(to-r, #7EF4FF, #00BBFF)"
              opacity={"80%"}
            >
              <CardBody>
                <Flex justify={"space-around"}>
                  <Box mt={5} w={"10%"}>
                    <AiFillTag />
                  </Box>
                  <Text>
                    Note - Tests can be booked for one user only per booking,
                    multiple users cannot be part of same booking.
                  </Text>
                  <Button
                    onClick={onOpen}
                    variant={"link"}
                    color={"white"}
                    mr={"4%"}
                  >
                    T&C
                  </Button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Terms and Conditions</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody textAlign={"center"}>
                        Note - <br />
                        Only one user can be part of one booking/order Multiple
                        users cannot be added for one booking/order User can
                        place a fresh order for different user for the same slot
                        (if needed) Multiple bookings should be made in case of
                        multiple users Pls reach out to our support team for
                        further assistance
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Flex>
              </CardBody>
            </Card>
            <Card my={10}>
              <CardBody>
                <Flex>
                  <Text m={"2%"}>Fulfilled By</Text>
                  <Box m={"1%"} w={"17%"}>
                    <Image
                      src="https://cdn-media.cure.fit/image/carefit/healthians_logo.png"
                      w={"80%"}
                    />
                  </Box>
                  <Spacer />
                  <Button
                    onClick={modal2.onOpen}
                    variant={"link"}
                    color={"pink.400"}
                    mr={"4%"}
                  >
                    Know more
                  </Button>
                  <Modal
                    isOpen={modal2.isOpen}
                    onClose={modal2.onClose}
                    size={"xl"}
                    isCentered
                  >
                    <ModalOverlay backdropFilter="blur(10px)" />
                    <ModalContent>
                      <Image
                        src="https://cdn-media.cure.fit/image/carefit/healthians_logo.png"
                        w={"30%"}
                        pl={6}
                        pt={5}
                      />
                      <ModalHeader>ABOUT</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        Healthians is India's largest provider of health test
                        at-home service, creating a new benchmark in quality.
                        600+ trained technicians. 46 touch-point technology for
                        assured quality collection & testing. DMLT & WHO
                        certified phlebotomists
                        <Divider mt={5} />
                        <Flex my={5}>
                          <Box
                            mr={4}
                            mt={2}
                            color={"red"}
                            bg={"gray.200"}
                            p={1}
                            h={"90%"}
                            borderRadius={"20px"}
                          >
                            <PiTestTubeFill size={25} />
                          </Box>
                          <Text>
                            Sample collected by and processed by Healthians and
                            its partner labs
                          </Text>
                        </Flex>
                        <Flex my={5}>
                          <Box
                            mr={4}
                            mt={2}
                            color={"red"}
                            bg={"gray.200"}
                            p={1}
                            h={"90%"}
                            borderRadius={"20px"}
                          >
                            <BsClipboard2Pulse size={25} />
                          </Box>
                          <Text py={2}>
                            Schedule, track and view your reports on the
                            care.fit app
                          </Text>
                        </Flex>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Flex>
                <UnorderedList>
                  <ListItem>DMLT and WHO certified phlebotomists</ListItem>
                  <ListItem>
                    46 touch-point technology for assured quality collection &
                    testing
                  </ListItem>
                </UnorderedList>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Product;
