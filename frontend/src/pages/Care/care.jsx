import React from "react";
import Card_care from "../../components/Card_care";
import { useState, useEffect } from "react";
import { SimpleGrid, Box, Heading, Divider } from "@chakra-ui/react";
import Accordion_care from "../../components/Accordion_care";

function Care() {
  const [care_data, setCare_data] = useState([]);
  console.log(process.env.REACT_APP_BASE_URL + "care");

  const get_care = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}care/`, {
      method: "GET",
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setCare_data(data);
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

  useEffect(() => {
    get_care();
  }, []);

  return (
    <>
      <Box m={"5%"} color={"white"}>
        <div>
          <Heading size={"md"}>Lab Tests</Heading>
        </div>
        <div>
          Assess and monitor your health from the comfort of your home now.
        </div>
        <div>
          <SimpleGrid columns={[2, 2, 3, 4, 5]} spacing="20px" m={"2%"}>
            {care_data.map((el) => {
              return (
                <Card_care
                  img={el.img_src}
                  price={el.price}
                  offer_price={el.offer_price}
                  id={el._id}
                />
              );
            })}
          </SimpleGrid>
          <Divider colorScheme="black" size="xl" />
        </div>
      </Box>
      <Accordion_care />
    </>
  );
}

export default Care;
