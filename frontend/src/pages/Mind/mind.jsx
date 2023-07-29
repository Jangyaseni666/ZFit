import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Mindcard from "../../components/mindcard";

const MindPage = () => {
  const [cardDeets, setCardDeets] = useState([]);
  const getCard = async () => {
    await fetch(`${process.env.REACT_APP_BASE_URL}mind/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardDeets(data);
      });
  };
  useEffect(() => {
    getCard();
  }, []);
  console.log(cardDeets[0]);
  return (
    <Box color="white">
      <Box m="5%" mb="0">
        <Heading size="md" fontFamily="Brandon Text Medium" fontWeight={"thin"}>
          Mindfulness Library
        </Heading>
        <Text>
          Access our pre-recorded meditation sessions, at your convenience
        </Text>
      </Box>
      <Grid
        templateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap={4}
        m="2%"
        ml="5%"
        mr="4%"
        gridRowGap={5}
      >
        {cardDeets.length > 0 &&
          cardDeets.map((el) => {
            return (
              <Mindcard
                imgsrc={el.imgsrc}
                title={el.title}
                desc={el.description}
                packs={el.packs}
              />
            );
          })}
      </Grid>
    </Box>
  );
};

export default MindPage;

{
  /* <GridItem w='100%' border='1px solid black'>
                        <Grid templateColumns='repeat(2,1fr)'>
                        <GridItem><img src={el.imgsrc} alt={el.title} /></GridItem>
                        
                        </Grid>
                    </GridItem> */
}
