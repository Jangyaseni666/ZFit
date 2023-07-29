import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const handleImgChange = (e) => {
    setImgSrc(e.target.files[0]);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailError = (e) => {
    e.preventDefault();
    if (email.indexOf("@") === -1) {
      alert("Email should contain @");
    } else {
      alert("You are good to go...");
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const imgFile = new FormData();
    imgFile.append("image", imgSrc);
    const obj = {
      email: email,
      // imgsrc: imgSrc,
      FName: fullName,
      gender: gender,
      pass: password,
    };
    try {
      await fetch(
        `https://api.imgbb.com/1/upload?key=bd5326ca857ba61f4381fe798873a379`,
        {
          method: "POST",
          body: imgFile,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data.url);
          setImgSrc(data.data.url + "");
          obj["imgsrc"] = data.data.url;
        });
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        alert(res.msg);
      } else {
        const err = await response.json();
        throw new Error(err);
      }
    } catch (err) {
      alert(err.msg);
    }
  };

  // console.log(gender);

  return (
    <>
      <Box
        border={"1px solid WindowFrame"}
        p="2%"
        m="10"
        ml={{ base: "", sm: "", md: "", lg: "40" }}
        mt={"20"}
        w={{ base: "80%", sm: "80%", md: "80%", lg: "40%" }}
        borderRadius={"20px"}
        bgColor={"#434445"}
        color={"white"}
        fontFamily={"Brandon Text"}
      >
        <Flex flexDirection={"column"}>
          <Heading textAlign={"center"} fontWeight={"medium"} fontSize={"2xl"}>
            <Center>
              <Image
                src="z-fittrans.png"
                h="70px"
                w="70px"
                borderRadius={"50%"}
                border={"2px solid white"}
                p="2"
                mb="2"
              />
            </Center>
            SIGN UP
          </Heading>
          <Box>
            <FormControl isRequired p="2">
              <FormLabel as="label">Profile Picture: </FormLabel>
              <Input
                type="file"
                variant={"unstyled"}
                onChange={handleImgChange}
              />
            </FormControl>
            <FormControl isRequired p="2">
              <FormLabel as="label">FULL NAME</FormLabel>
              <Input
                type="text"
                variant={"flushed"}
                placeholder="Enter your full name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired p="2">
              <FormLabel as="label">PASSWORD</FormLabel>
              <Input
                type="password"
                variant={"flushed"}
                placeholder="Enter the password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired p="2">
              <FormLabel as="label">EMAIL</FormLabel>
              <Input
                type="email"
                variant={"flushed"}
                placeholder="Enter your email address"
                onChange={handleEmailChange}
              />
            </FormControl>
            <FormControl isRequired p="2">
              <FormLabel as="legend">Gender: </FormLabel>
              <RadioGroup p="1" onChange={setGender} value={gender}>
                <Radio value="Female" p="1">
                  Female
                </Radio>
                <Radio value="Male" p="1">
                  Male
                </Radio>
                <Radio value="Others" p="1">
                  Others
                </Radio>
              </RadioGroup>
            </FormControl>
            {/* <FormControl isRequired p='2'color={'white'}>
                        <FormLabel as='label'>Birthday: </FormLabel>
                        <Input type="date" variant={'flushed'} id='calender' />
                    </FormControl> */}
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                mt="10"
                variant={"solid"}
                color={"#181a27"}
                bgColor={"white"}
                onClick={(e) => {
                  handleEmailError(e);
                }}
                _hover={{
                  bg: "#181a27",
                  color: "white",
                  cursor: "pointer",
                  border: "2px solid white",
                }}
              >
                Submit
              </Button>
              <Text>
                Already have an account? <Link>Sign In</Link>
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Image
          display={{ base: "none", sm: "none", lg: "block", md: "none" }}
          src="signbg.jpeg"
          alt="error"
          w="40%"
          position={"absolute"}
          right={{ lg: "40" }}
          top={"9%"}
          borderRadius={"20px"}
          zIndex={"-1"}
        />
      </Box>
    </>
  );
};

export default Signup;
