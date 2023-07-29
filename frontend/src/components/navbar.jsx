import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  Image,
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Center,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { color } from "framer-motion";
import { MdLocationPin } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Cart_item from "./cart_item";
import { PiSignInBold } from "react-icons/pi";
import "./signinmodal.css";

const signintoken = localStorage.getItem("token");
const style1 = { fontSize: "45", color: "white" };
const style2 = { fontSize: "30", color: " black" };

function Navbar() {
  //cart
  const [cartItem, setCartItem] = useState([]);
  // localStorage.setItem("user_id", 1); //delete uid finally
  const uid = localStorage.getItem("userid");
  const pfp = localStorage.getItem("pfp");
  const isad = localStorage.getItem("ad");
  // console.log(isad==='false');
  var sum = 0;
  const [totSum, setTotSum] = useState(0);
  const navigate = useNavigate();
  const toast = useToast();
  const cart = useDisclosure();
  const signin = useDisclosure();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const get_cart = async () => {
    const token = await localStorage.getItem("token");
    console.log(token);
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
    if (uid != null) {
      get_cart();
    }
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
  const handleSignin = async () => {
    const token = await localStorage.getItem("token");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(token),
          },
          body: JSON.stringify({
            email,
            pass,
          }),
        }
      );
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        if (res.token !== undefined) {
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("userid", res.userId);
          localStorage.setItem("pfp", res.imgsrc);
          localStorage.setItem("ad", res.isAdmin);
        }

        window.location.reload();
        alert(res.msg);
      } else {
        const err = await response.json();
        throw new Error(err);
      }
    } catch (error) {
      alert(error.msg);
    }
  };
  const btnRef = React.useRef();
  // const history=useHistory();
  const getapp = () => {};
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const gotoCare = () => {
    console.log("care");
    navigate("/care");
  };
  const gotoMind = () => {
    console.log("mind");
    navigate("/mind");
  };
  const gotoFit = () => {
    console.log("fit");
    navigate("/fit");
  };
  const signOut = () => {
    console.log("signed out");
    localStorage.clear();
    toast({
      title: "Signed out",
      status: "error",
      duration: 9000,
      isClosable: true,
      variant: "top-accent",
    });
    navigate("/");
    window.location.reload();
  };

  return (
    <Box
      paddingLeft={2}
      paddingRight={2}
      paddingTop={1}
      paddingBottom={1}
      bg={"rgba(20,20,20,0.7)"}
      display={{ base: "flex", md: "block" }}
      justifyContent={"space-between"}
      position={"sticky"}
      top={0}
      left={0}
      right={0}
      zIndex={5}
    >
      <Flex justifyContent={"space-between"} alignItems="center">
        <Box p={2} display={{ base: "block", md: "block" }}>
          <Link to="">
            <Image src="fit-removebg-preview.png" alt="error" height={70} />
          </Link>
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <ButtonGroup>
            <Button
              _hover={{ bg: "teal" }}
              variant={"ghost"}
              color={"white"}
              fontWeight={"bold"}
              onClick={gotoFit}
              fontFamily={'Brandon Text'}
            >
              FITNESS
            </Button>
            <Button
              _hover={{ bg: "teal" }}
              variant={"ghost"}
              color={"white"}
              fontWeight={"bold"}
              onClick={gotoCare}
              fontFamily={'Brandon Text'}
            >
              CARE
            </Button>
            <Button
              _hover={{ bg: "teal" }}
              variant={"ghost"}
              color={"white"}
              fontWeight={"bold"}
              onClick={gotoMind}
              fontFamily={'Brandon Text'}
            >
              MIND
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
              <Select placeholder="BHUBANESWAR" bg={"white"} color={"black"} fontFamily={'Brandon Text'}>
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
                fontFamily={'Brandon Text'}
              >
                GET APP
              </Button>
            </ButtonGroup>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Wrap>
              <WrapItem>
                <Popover>
                  <PopoverTrigger>
                    {signintoken !== null ? (
                      <Button bg={"rgba:(20,20,20,0.7)"} _hover={{ transform: "scale(1.07)" }} pt={3}>
                        <Tooltip label="User" fontSize="md">
                          <Avatar name="User" src={pfp} />
                        </Tooltip>
                      </Button>
                    ) : (
                      <Button bg={"rgba:(20,20,20,0.7)"} _hover={{ transform: "scale(1.07)" }} pt={3}>
                        <Tooltip label="User" fontSize="md">
                          <Avatar
                            name="Hello User!"
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
                          <Button
                            color={"white"}
                            variant={"ghost"}
                            _hover={{ color: "black" }}
                            onClick={signOut}
                          >
                            SignOut
                          </Button>
                        ) : (
                          <>
                            <Button
                              color={"white"}
                              variant={"ghost"}
                              _hover={{ color: "black" }}
                              onClick={signin.onOpen}
                            >
                              SignIn
                            </Button>
                            <Modal
                              isCentered
                              isOpen={signin.isOpen}
                              onClose={signin.onClose}
                              size={"sm"}
                              motionPreset="slideInBottom"
                              useInert={false}
                            >
                              <ModalOverlay
                                bg="transparent"
                                backdropFilter={"blur(2px)"}
                              />
                              <ModalContent
                                className="glass"
                                bgColor={"#181818"}
                                border={"1px solid rgba(255, 255, 255, 0.18)"}
                                borderRadius={"12px"}
                                p="20px"
                              >
                                <ModalHeader
                                  color={"white"}
                                  fontFamily={"Brandon Text"}
                                >
                                  <Center
                                    display={"flex"}
                                    flexDirection={"column"}
                                  >
                                    <Image
                                      src="z-fittrans.png"
                                      alt="Logo"
                                      h="60px"
                                      w="60px"
                                    />
                                    <Text>SIGN IN</Text>
                                  </Center>
                                </ModalHeader>
                                <ModalCloseButton color={"white"} />
                                <ModalBody>
                                  <Input
                                    variant={"flushed"}
                                    placeholder="Enter email"
                                    p={"1"}
                                    color={"white"}
                                    id="inputmodal"
                                    fontFamily={"Brandon Text"}
                                    letterSpacing={"1.2px"}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  &nbsp;
                                  <Input
                                    type="password"
                                    variant={"flushed"}
                                    placeholder="Enter password"
                                    color={"white"}
                                    p={"1"}
                                    id="inputmodal"
                                    fontFamily={"Brandon Text"}
                                    letterSpacing={"1.2px"}
                                    onChange={(e) => setPass(e.target.value)}
                                  />
                                  &nbsp;
                                </ModalBody>
                                <ModalFooter
                                  display={"flex"}
                                  justifyContent={"center"}
                                >
                                  <Stack>
                                    <Button
                                      background={"white"}
                                      mr={3}
                                      _hover={{ bg: "black", color: "white" }}
                                      fontFamily={"Brandon Text"}
                                      fontWeight={"bold"}
                                      rightIcon={<PiSignInBold />}
                                      onClick={handleSignin}
                                    >
                                      Sign In
                                    </Button>
                                    <Text
                                      color={"white"}
                                      fontSize={"sm"}
                                      fontFamily={"Brandon Text"}
                                    >
                                      Don't have an account?{" "}
                                      <Link to={"/signup"}>Sign Up</Link>
                                    </Text>
                                  </Stack>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                          </>
                        )}
                      </PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody
                        bg="#4f4c4c"
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <Button
                          colorScheme="teal"
                          color={"white"}
                          variant={"ghost"}
                          _hover={{ color: "black" }}
                          fontFamily={'Brandon Text'}
                        >
                          <Link to={"/profile"}> User Profile </Link>
                        </Button>
                      </PopoverBody>

                      {isad === "true" && (
                        <PopoverFooter
                          display={"flex"}
                          justifyContent={"center"}
                          bg="#4f4c4c"
                        >
                          <Button
                            colorScheme="teal"
                            color={"white"}
                            variant={"ghost"}
                            _hover={{ color: "black" }}
                            fontFamily={'Brandon Text'}
                          >
                            <Link to={"/admin"}> Admin Panel</Link>
                          </Button>
                        </PopoverFooter>
                      )}
                    </PopoverContent>
                  </Portal>
                </Popover>
              </WrapItem>
            </Wrap>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Wrap>
              <WrapItem pt={3}>
                <Tooltip label="Visit Cart" fontSize="md" fontFamily={"inter"}>
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
                  <Image
                    src="fit-removebg-preview.png"
                    alt="error"
                    height={50}
                  />
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
                    onClick={gotoFit}
                    fontFamily={'Brandon Text'}
                  >
                   FITNESS
                  </Button>
                  <Button
                    _hover={{ bg: "teal" }}
                    variant={"ghost"}
                    color={"white"}
                    fontWeight={"bold"}
                    onClick={gotoCare}
                    fontFamily={'Brandon Text'}
                  >
                    CARE
                  </Button>
                  <Button
                    _hover={{ bg: "teal" }}
                    variant={"ghost"}
                    color={"white"}
                    fontWeight={"bold"}
                    onClick={gotoMind}
                    fontFamily={'Brandon Text'}
                  >
                    MIND
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
                    fontFamily={'Brandon Text'}
                  >
                    GET APP
                  </Button>
                </ButtonGroup>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Wrap display={{ base: "grid" }}>
                  <WrapItem display={{ base: "grid" }}>
                    <Tooltip label="User" fontSize="md">
                      {/* <Avatar  name='User' src='https://bit.ly/dan-abramov' /> */}
                      <Button
                        _hover={{ bg: "teal" }}
                        variant={"ghost"}
                        color={"white"}
                        fontWeight={"bold"}
                        fontFamily={'Brandon Text'}
                      >
                        <Link to={"/profile"}>MY PROFILE</Link>
                      </Button>
                    </Tooltip>
                  </WrapItem>
                </Wrap>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
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
                        fontFamily={'Brandon Text'}
                      >
                        MY CART
                      </Button>
                    </Tooltip>
                  </WrapItem>
                </Wrap>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
export default Navbar;
