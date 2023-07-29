import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";

const FitCount = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <Flex>
      <Box mx={1} fontSize={"150%"}>
        <b>{hours.toString().padStart(2, "0")}</b>
        <br />
        <Text fontSize={"50%"}>hrs</Text>
      </Box>
      <Text fontSize={"125%"} m={1}>
        :
      </Text>
      <Box mx={1} fontSize={"150%"}>
        <b>{minutes.toString().padStart(2, "0")}</b>
        <br />
        <Text fontSize={"50%"}>mins</Text>
      </Box>
      <Text fontSize={"125%"} m={1}>
        :
      </Text>
      <Box mx={1} fontSize={"150%"}>
        <b>{remainingSeconds.toString().padStart(2, "0")}</b>
        <br />
        <Text fontSize={"50%"}>secs</Text>
      </Box>
    </Flex>
  );
};

export default FitCount;
