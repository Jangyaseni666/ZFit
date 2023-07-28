import React from "react";
import { useState, useEffect } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Accordion
} from "@chakra-ui/react";

function Accordion_care() {
  const [care_acc, setCare_acc] = useState([]);

  const get_acc = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}faq/`, {
      method: "GET",
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setCare_acc(data);
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

  useEffect(() => {
    get_acc();
  }, []);

  return (
    <>
      <Box bg={"black"} color={"white"} p={"10px"} px={"10%"} pb={5}>
        <Heading size={"2xl"} m={2} mt={10}>
          FAQS
        </Heading>
        <Heading size={"sm"} color={"GrayText"} m={2} mb={"30px"}>
          7 Questions
        </Heading>
        <Accordion allowToggle>
        {care_acc.map((el) => {
          return(
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"2xl"}>
                  {el.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} w={["100%", "100%", "60%"]}>
              {el.answer}
            </AccordionPanel>
          </AccordionItem>
          )
        })}
        </Accordion>
      </Box>
    </>
  );
}

export default Accordion_care;
