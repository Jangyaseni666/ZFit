import React from "react";
import { useState } from "react";
import { Image, Card, Text, Button } from "@chakra-ui/react";

function Fit_mid_card({ imgsrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Card
      className="fit_card_mid"
      bgColor={"#2D3745"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        position={"absolute"}
        variant="solid"
        bgColor={"#424B58"}
        colorScheme="facebook"
        top={"85%"}
        right={"30%"}
        h={"10%"}
        color={"white"}
        display={"block"}
        style={{
          opacity: isHovered ? 0.9 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Text my={"1%"} mx={"1.5%"}>
          EXPLORE
        </Text>
      </Button>
      <Image src={imgsrc} borderTopRadius="lg" w={"100%"} />
    </Card>
  );
}

export default Fit_mid_card;
