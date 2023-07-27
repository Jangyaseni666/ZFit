import React from "react";
import {Box,ButtonGroup,Flex,Image,Link,Button,Wrap,WrapItem,Avatar,Tooltip, 
    MenuButton, MenuList, MenuItem,Select,Menu, InputGroup, InputLeftElement,
     IconButton,Drawer,DrawerOverlay,Icon,
     DrawerContent,DrawerBody,DrawerHeader,useDisclosure, InputRightElement
    ,Popover,PopoverAnchor,PopoverArrow,PopoverBody,PopoverHeader,PopoverContent,PopoverTrigger,Portal,PopoverCloseButton
,PopoverFooter} from "@chakra-ui/react";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import { color } from "framer-motion";
import {MdLocationPin} from "react-icons/md";
import {useHistory} from "react-router-dom";
const signintoken=localStorage.getItem("signintoken");



const style1={fontSize:"45" , color:"white"}
const style2={fontSize:"30" , color:" black"}


function Navbar(){
    // const history=useHistory();
    const getapp=()=>{

    }
    const { isOpen, onOpen, onClose,onToggle } = useDisclosure();
    return(
        <Box paddingLeft={2} paddingRight={2} bg={"black"} display={{base:"flex",md:"block"}} justifyContent={"space-between"}>
            <Flex justifyContent={"space-between"}  alignItems="center" >
                <Box  p={2} display={{base:"block",md:"block"}}>
                    <Link to ="">
                    <Image src='z-fit_logo.png' alt='error' height={50}/>
                    </Link>
                </Box>
                <Box display={{base:"none",md:"block"}}>
                    <ButtonGroup>
                        <Button _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>FITNESS</Button>
                        <Button  _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>CARE</Button>
                        <Button  _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>MIND</Button>
                        <Button  _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>STORE</Button>
                    </ButtonGroup>
                </Box>
                <Flex gap={4} justify={"space-evenly"} alignItems={"center"} >
                    <Box display={{base:"none",md:"block"}} >
                        <InputGroup>
                        <InputRightElement pointerEvents={"none"} children={<i><MdLocationPin style={style2}/></i>}/>
                            <Select placeholder="BHUBANESWAR" bg={"white"} color={"black"}  >
                                <option>MUMBAI</option>  
                                <option>CHENNAI</option>
                                <option>DELHI NCR</option>
                                <option>BANGALORE</option>
                            </Select>
                        </InputGroup>
                    
                    </Box>
                    <Box display={{base:"none",md:"block"}}>
                        <ButtonGroup>
                            <Button  _hover={{bg:"teal"}} variant={"outline"} color={"white"} fontWeight={"bold"}>GET APP</Button>
                        </ButtonGroup>
                    </Box>
                    <Box display={{base:"none",md:"block"}}>
                        <Link to ="">
                        <Wrap>
                            <WrapItem>
                                <Popover>
                                <PopoverTrigger>
                                    {(signintoken!==null)?
                                        <Button bg={"black"} _hover={{bg:"black"}}>
                                        <Tooltip label='User' fontSize='md'>
                                            <Avatar name='Dan Abrahmov' src='https://pps.whatsapp.net/v/t61.24694-24/317751304_685605329685610_426697610318965164_n.jpg?ccb=11-4&oh=01_AdSnAKt_90KpvpJ-ZGPsXtr_pqwxihYk8mbhufXr50iTtQ&oe=64CB81C8' />
                                        </Tooltip> 
                                    </Button>:<Button bg={"black"} _hover={{bg:"black"}}>
                                        <Tooltip label='User' fontSize='md'>
                                            <Avatar name='Dan Abrahmov' src='https://pps.whatsapp.net/v/t61.24694-24/317751304_685605329685610_426697610318965164_n.jpg?ccb=11-4&oh=01_AdSnAKt_90KpvpJ-ZGPsXtr_pqwxihYk8mbhufXr50iTtQ&oe=64CB81C8' />
                                        </Tooltip> 
                                    </Button>
                                    
                                    }
                                    
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent width={200}>
                                    <PopoverArrow />
                                    <PopoverHeader bg="#4f4c4c" display={"flex"} justifyContent={"center"}>
                                        {(signintoken!==null)?<Button colorScheme="teal">SignOut</Button>:<Button colorScheme="teal">SignIn</Button>}
                                    </PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody bg="#4f4c4c" display={"flex"} justifyContent={"center"}>
                                        <Button colorScheme='teal'>User Profile</Button>
                                        
                                    </PopoverBody>
                                    {/* <PopoverFooter display={"flex"} justifyContent={"center"} bg="#4f4c4c"><Button colorScheme='teal'>Order History</Button></PopoverFooter> */}
                                    </PopoverContent>
                                </Portal>
                                </Popover>
                                
                            </WrapItem>
                        </Wrap>
                        </Link>
                    </Box>
                    <Box display={{base:"none",md:"block"}}>
                        <Link to ="">
                            <Wrap>
                                <WrapItem>
                                    <Tooltip label='Visit Cart' fontSize='md'>
                                       <i><HiOutlineShoppingCart style={style1}/></i> 
                                    </Tooltip> 
                                </WrapItem>
                            </Wrap>
                        </Link>
                    </Box>
    
                </Flex>
            </Flex>
            <Flex alignItems={"center"}  >
                    <IconButton
                        icon={isOpen ? <FaTimes style={style1}/> :<GiHamburgerMenu style={style1}/>}
                        size="md"
                        display={{base:"block",md:"none"}}
                        onClick={onToggle}
                        bg={"none"}
                    />
                    <Drawer placement="left" onClose={onToggle} isOpen={isOpen} bg="black" size={"xs"} display={{base:"block",md:"none"}} >
                        <DrawerOverlay />
                        <DrawerContent bg={"#b1b1cd"}>
                        <DrawerHeader display={"flex"} justifyContent={"center"}>
                            <Box  >
                                <Link to ="">
                                <Image src='z-fit_logo.png' alt='error' height={50}/>
                                </Link>
                            </Box>
                        </DrawerHeader>
                        <DrawerBody>
                            
                            <Box>
                                <ButtonGroup display={{base:"grid"}}>
                                    <Button _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>FITNESS</Button>
                                    <Button  _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>CARE</Button>
                                    <Button  _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>MIND</Button>
                                    <Button  _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>STORE</Button>
                                </ButtonGroup>
                            </Box>
                            <Box>
                                <ButtonGroup display={{base:"grid"}}>
                                    <Button  _hover={{bg:"teal"}} variant={"outline"} color={"white"} fontWeight={"bold"} onClick={getapp}>GET APP</Button>
                                </ButtonGroup>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"}>
                                <Link to ="">
                                <Wrap display={{base:"grid"}}>
                                    <WrapItem display={{base:"grid"}}>
                                        <Tooltip label='Dan Abrahmov' fontSize='md'>
                                            {/* <Avatar  name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /> */}
                                            <Button _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>MY PROFILE</Button>
                                        </Tooltip> 
                                    </WrapItem>
                                </Wrap>
                                </Link>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"}>
                                <Link to ="">
                                    <Wrap display={{base:"grid"}}>
                                        <WrapItem display={{base:"grid"}}>
                                            <Tooltip label='Visit Cart' fontSize='md'>
                                            {/* <i><HiOutlineShoppingCart style={style1}/></i>  */}
                                            <Button _hover={{bg:"teal"}} variant={"ghost"} color={"white"} fontWeight={"bold"}>MY CART</Button>
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
    )
}
export default Navbar;