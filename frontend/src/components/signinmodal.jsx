import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  Center,
  Link,
  Text,
  Stack,
  Icon,
  Image,
  Box,
} from "@chakra-ui/react";
import { PiSignInBold } from "react-icons/pi";
import { useDisclosure } from "@chakra-ui/react";
import "./signinmodal.css";

const SigninModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignin = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
        localStorage.setItem("token", JSON.stringify(res.token));
        localStorage.setItem("userid", res.userId);
        console.log(res.imgsrc);
        localStorage.setItem("pfp", res.imgsrc);

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
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={"sm"}
        motionPreset="slideInBottom"
        useInert={false}
      >
        <ModalOverlay bg="transparent" backdropFilter={"blur(2px)"} />
        <ModalContent
          className="glass"
          bgColor={"#181818"}
          border={"1px solid rgba(255, 255, 255, 0.18)"}
          borderRadius={"12px"}
          p="20px"
        >
          <ModalHeader color={"white"} fontFamily={"Brandon Text"}>
            <Center display={"flex"} flexDirection={"column"}>
              <Image src="z-fittrans.png" alt="Logo" h="60px" w="60px" />
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
          <ModalFooter display={"flex"} justifyContent={"center"}>
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
              <Text color={"white"} fontSize={"sm"} fontFamily={"Brandon Text"}>
                Don't have an account? <Link>Sign Up</Link>
              </Text>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SigninModal;
