import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  Image,
  Link,
  Button,
  Wrap,
  WrapItem,
  Avatar,
  Tooltip,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Menu,
  InputGroup,
  InputLeftElement,
  IconButton,
  Drawer,
  DrawerOverlay,
  Icon,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  InputRightElement,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
  PopoverContent,
  PopoverTrigger,
  Portal,
  PopoverCloseButton,
  PopoverFooter,
  DrawerCloseButton,
  Text,
  Heading,
  DrawerFooter,
} from "@chakra-ui/react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { color } from "framer-motion";
import { MdLocationPin } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Cart_item from "./cart_item";

const signintoken = localStorage.getItem("signintoken");
const style1 = { fontSize: "45", color: "white" };
const style2 = { fontSize: "30", color: " black" };

function Navbar() {
  //cart
  const [cartItem, setCartItem] = useState([]);
  localStorage.setItem("user_id", 1); //delete uid finally
  const uid = localStorage.getItem("user_id");
  var sum = 0;
  const [totSum, setTotSum] = useState(0);
  const navigate = useNavigate();
  const toast = useToast();
  const cart = useDisclosure();

  const get_cart = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}history/cart${uid}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setCartItem(data);
      data.map((el) => {
        sum = sum + Number(el.cost.slice(1));
      });
      setTotSum(sum / 2);
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

  useEffect(() => {
    get_cart();
  }, []);

  const payment = (s) => {
    if (cartItem.length == 0) {
      toast({
        title: "NO ITEMS",
        description: "cart is empty",
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "top-accent",
      });
    } else {
      localStorage.setItem("tot_sum", s);
      navigate("/payment");
    }
  };
  //cart

  const btnRef = React.useRef();
  // const history=useHistory();
  const getapp = () => {};
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  return (
    <Box
      paddingLeft={2}
      paddingRight={2}
      bg={"black"}
      display={{ base: "flex", md: "block" }}
      justifyContent={"space-between"}
    >
      <Flex justifyContent={"space-between"} alignItems="center">
        <Box p={2} display={{ base: "block", md: "block" }}>
          <Link to="">
            <Image src="z-fit_logo.png" alt="error" height={50} />
          </Link>
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <ButtonGroup>
            <Button
              _hover={{ bg: "teal" }}
              variant={"ghost"}
              color={"white"}
              fontWeight={"bold"}
            >
              FITNESS
            </Button>
            <Button
              _hover={{ bg: "teal" }}
              variant={"ghost"}
              color={"white"}
              fontWeight={"bold"}
            >
              CARE
            </Button>
            <Button
              _hover={{ bg: "teal" }}
              variant={"ghost"}
              color={"white"}
              fontWeight={"bold"}
            >
              MIND
            </Button>
            <Button
              _hover={{ bg: "teal" }}
              variant={"ghost"}
              color={"white"}
              fontWeight={"bold"}
            >
              STORE
            </Button>
          </ButtonGroup>
        </Box>
        <Flex gap={4} justify={"space-evenly"} alignItems={"center"}>
          <Box display={{ base: "none", md: "block" }}>
            <InputGroup>
              <InputRightElement
                pointerEvents={"none"}
                children={
                  <i>
                    <MdLocationPin style={style2} />
                  </i>
                }
              />
              <Select placeholder="BHUBANESWAR" bg={"white"} color={"black"}>
                <option>MUMBAI</option>
                <option>CHENNAI</option>
                <option>DELHI NCR</option>
                <option>BANGALORE</option>
              </Select>
            </InputGroup>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <ButtonGroup>
              <Button
                _hover={{ bg: "teal" }}
                variant={"outline"}
                color={"white"}
                fontWeight={"bold"}
              >
                GET APP
              </Button>
            </ButtonGroup>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Link to="">
              <Wrap>
                <WrapItem>
                  <Popover>
                    <PopoverTrigger>
                      {signintoken !== null ? (
                        <Button bg={"black"} _hover={{ bg: "black" }}>
                          <Tooltip label="User" fontSize="md">
                            <Avatar
                              name="Dan Abrahmov"
                              src="https://pps.whatsapp.net/v/t61.24694-24/317751304_685605329685610_426697610318965164_n.jpg?ccb=11-4&oh=01_AdSnAKt_90KpvpJ-ZGPsXtr_pqwxihYk8mbhufXr50iTtQ&oe=64CB81C8"
                            />
                          </Tooltip>
                        </Button>
                      ) : (
                        <Button bg={"black"} _hover={{ bg: "black" }}>
                          <Tooltip label="User" fontSize="md">
                            <Avatar
                              name="Dan Abrahmov"
                              src="https://pps.whatsapp.net/v/t61.24694-24/317751304_685605329685610_426697610318965164_n.jpg?ccb=11-4&oh=01_AdSnAKt_90KpvpJ-ZGPsXtr_pqwxihYk8mbhufXr50iTtQ&oe=64CB81C8"
                            />
                          </Tooltip>
                        </Button>
                      )}
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent width={200}>
                        <PopoverArrow />
                        <PopoverHeader
                          bg="#4f4c4c"
                          display={"flex"}
                          justifyContent={"center"}
                        >
                          {signintoken !== null ? (
                            <Button colorScheme="teal">SignOut</Button>
                          ) : (
                            <Button colorScheme="teal">SignIn</Button>
                          )}
                        </PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody
                          bg="#4f4c4c"
                          display={"flex"}
                          justifyContent={"center"}
                        >
                          <Button colorScheme="teal">User Profile</Button>
                        </PopoverBody>
                        {/* <PopoverFooter display={"flex"} justifyContent={"center"} bg="#4f4c4c"><Button colorScheme='teal'>Order History</Button></PopoverFooter> */}
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </WrapItem>
              </Wrap>
            </Link>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Link to="">
              <Wrap>
                <WrapItem>
                  <Tooltip
                    label="Visit Cart"
                    fontSize="md"
                    fontFamily={"inter"}
                  >
                    <div>
                      <Button
                        variant={"ghost"}
                        colorScheme="blackAlpha"
                        ref={btnRef}
                        onClick={cart.onOpen}
                      >
                        <HiOutlineShoppingCart style={style1} />
                      </Button>
                      <Drawer
                        isOpen={cart.isOpen}
                        placement="right"
                        onClose={cart.onClose}
                        finalFocusRef={btnRef}
                        size={"md"}
                      >
                        <DrawerOverlay />
                        <DrawerContent bgColor={"#171A26"} color={"white"}>
                          <DrawerCloseButton />
                          <DrawerHeader
                            display={"flex"}
                            justifyContent={"center"}
                            fontFamily={"inter"}
                          >
                            YOUR CART{" "}
                            <Text m={"0.9%"}>
                              <HiOutlineShoppingCart />
                            </Text>
                          </DrawerHeader>

                          <DrawerBody>
                            <Heading
                              size={"lg"}
                              borderBottom={"2px solid #2C6FB4"}
                              fontFamily={"inter"}
                            >
                              LAB TESTS
                            </Heading>
                            {cartItem.length == 0 ? (
                              <Text>Cart is empty</Text>
                            ) : (
                              cartItem.map((el) => {
                                return <Cart_item id={el.pid} _id={el._id} />;
                              })
                            )}
                          </DrawerBody>

                          <DrawerFooter>
                            <Button
                              variant="outline"
                              mr={3}
                              onClick={onClose}
                              colorScheme="whiteAlpha"
                            >
                              Cancel
                            </Button>
                            <Button
                              colorScheme="blue"
                              onClick={() => payment(totSum)}
                            >
                              ₹ {totSum}
                            </Button>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                    </div>
                  </Tooltip>
                </WrapItem>
              </Wrap>
            </Link>
          </Box>
        </Flex>
      </Flex>
      <Flex alignItems={"center"}>
        <IconButton
          icon={
            isOpen ? (
              <FaTimes style={style1} />
            ) : (
              <GiHamburgerMenu style={style1} />
            )
          }
          size="md"
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          bg={"none"}
        />
        <Drawer
          placement="left"
          onClose={onToggle}
          isOpen={isOpen}
          bg="black"
          size={"xs"}
          display={{ base: "block", md: "none" }}
        >
          <DrawerOverlay />
          <DrawerContent bg={"#b1b1cd"}>
            <DrawerHeader display={"flex"} justifyContent={"center"}>
              <Box>
                <Link to="">
                  <Image src="z-fit_logo.png" alt="error" height={50} />
                </Link>
              </Box>
            </DrawerHeader>
            <DrawerBody>
              <Box>
                <ButtonGroup display={{ base: "grid" }}>
                  <Button
                    _hover={{ bg: "teal" }}
                    variant={"ghost"}
                    color={"white"}
                    fontWeight={"bold"}
                  >
                    FITNESS
                  </Button>
                  <Button
                    _hover={{ bg: "teal" }}
                    variant={"ghost"}
                    color={"white"}
                    fontWeight={"bold"}
                  >
                    CARE
                  </Button>
                  <Button
                    _hover={{ bg: "teal" }}
                    variant={"ghost"}
                    color={"white"}
                    fontWeight={"bold"}
                  >
                    MIND
                  </Button>
                  <Button
                    _hover={{ bg: "teal" }}
                    variant={"ghost"}
                    color={"white"}
                    fontWeight={"bold"}
                  >
                    STORE
                  </Button>
                </ButtonGroup>
              </Box>
              <Box>
                <ButtonGroup display={{ base: "grid" }}>
                  <Button
                    _hover={{ bg: "teal" }}
                    variant={"outline"}
                    color={"white"}
                    fontWeight={"bold"}
                    onClick={getapp}
                  >
                    GET APP
                  </Button>
                </ButtonGroup>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Link to="">
                  <Wrap display={{ base: "grid" }}>
                    <WrapItem display={{ base: "grid" }}>
                      <Tooltip label="Dan Abrahmov" fontSize="md">
                        {/* <Avatar  name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /> */}
                        <Button
                          _hover={{ bg: "teal" }}
                          variant={"ghost"}
                          color={"white"}
                          fontWeight={"bold"}
                        >
                          MY PROFILE
                        </Button>
                      </Tooltip>
                    </WrapItem>
                  </Wrap>
                </Link>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Link to="">
                  <Wrap display={{ base: "grid" }}>
                    <WrapItem display={{ base: "grid" }}>
                      <Tooltip label="Visit Cart" fontSize="md">
                        {/* <i><HiOutlineShoppingCart style={style1}/></i>  */}
                        <Button
                          _hover={{ bg: "teal" }}
                          variant={"ghost"}
                          color={"white"}
                          fontWeight={"bold"}
                          onClick={cart.onOpen}
                        >
                          MY CART
                        </Button>
                      </Tooltip>
                    </WrapItem>
                  </Wrap>
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
export default Navbar;
