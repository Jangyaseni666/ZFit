import React, { useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Box, Text } from "@chakra-ui/react";

const VideoPlayer = ({ videoSrc, thumbnailSrc }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current.play();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    setIsHovered(false);
  };

  return (
    <Box bgImage={thumbnailSrc}>
      <Box
        position={"absolute"}
        color={"white"}
        display={"flex"}
        justifyContent={"center"}
        w={"100%"}
        top={"25%"}
        style={{ opacity: isHovered ? 0 : 0.8 }}
      >
        <BsFillPlayFill size={"15%"} />
      </Box>
      <video
        ref={videoRef}
        muted
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ opacity: isHovered ? 1 : 0 ,transition: 'opacity 0.5s ease'}}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoPlayer;
