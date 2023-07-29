import React from "react";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Plan.css";

function Plan_table() {
  return (
      <Box textAlign={"center"} backgroundColor={"#070B11"} mb={"10%"}>
        <Image
          pos={"absolute"}
          h={"40vw"}
          left={"45vw"}
          top={"430vh"}
          opacity={"30%"}
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/violet-blur-circle.svg"
        />
        <Image
          pos={"absolute"}
          h={"50vw"}
          left={"50vw"}
          top={"40%"}
          opacity={"30%"}
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg"
        />
        <Image
          pos={"absolute"}
          h={"5%"}
          left={"10%"}
          top={"45%"}
          opacity={"10%"}
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/gradient-circle/golden-blur-circle.svg"
        />
        <Image
          pos={"absolute"}
          h={"7%"}
          left={"15%"}
          top={"40%"}
          opacity={"50%"}
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/cornflower-blue-blur-circle.svg"
        />
        <Heading mb={3} color={"white"} fontFamily={"inter"}>
          Choose your cultpass
        </Heading>
        <Text as="samp" color={"#B9BABB"} fontFamily={"inter"}>
          3 flexible plans to suit your fitness needs
        </Text>
        <Grid
          fontFamily={"inter"}
          templateColumns={"repeat(4,1fr)"}
          color={"#D1D1D2"}
          w={"50%"}
          mx={"25%"}
        >
          <GridItem className="pgrid"></GridItem>
          <GridItem
            className="pgrid"
            display={"flex"}
            justifyContent={"center"}
          >
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_89,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
              align={"50%"}
            />
          </GridItem>
          <GridItem
            className="pgrid"
            display={"flex"}
            justifyContent={"center"}
          >
            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_65,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png" />
          </GridItem>
          <GridItem
            className="pgrid"
            display={"flex"}
            justifyContent={"center"}
          >
            <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_93,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg" />
          </GridItem>

          <GridItem
            className="pgrid"
            textAlign={"left"}
            display={"flex"}
            w={"150%"}
            position={"relative"}
            right={"55%"}
            h={"123%"}
          >
            <Heading size={"sm"} w={"70%"} fontFamily={"inter"}>
              ELITE Gyms & At Centre Group Classes
            </Heading>
            <Box
              minW={"32%"}
              borderBottom={"1px solid #2F3038"}
              m={0}
              position={"relative"}
              left={"10%"}
            ></Box>
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCheckCircle color="#02BFFF" />
            </Box>
            Unlimited
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            02 Sessions/ month
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCloseCircle color="#5A595E" />
            </Box>
          </GridItem>

          <GridItem className="pgrid" textAlign={"left"}>
            <Heading
              size={"sm"}
              display={"flex"}
              w={"150%"}
              position={"relative"}
              right={"63%"}
              h={"126%"}
              fontFamily={"inter"}
            >
              PRO Gyms
            </Heading>
            <Box
              maxW={"100%"}
              borderBottom={"1px solid #2F3038"}
              m={0}
              position={"relative"}
              left={"60%"}
            ></Box>
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCheckCircle color="#02BFFF" />
            </Box>
            Unlimited
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCheckCircle color="#02BFFF" />
            </Box>
            Unlimited
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCloseCircle color="#5A595E" />
            </Box>
          </GridItem>

          <GridItem className="pgrid" textAlign={"left"}>
            <Heading
              size={"sm"}
              display={"flex"}
              w={"150%"}
              position={"relative"}
              right={"63%"}
              h={"126%"}
              fontFamily={"inter"}
            >
              Smart workout plan
            </Heading>
            <Box
              maxW={"100%"}
              borderBottom={"1px solid #2F3038"}
              m={0}
              position={"relative"}
              left={"60%"}
            ></Box>
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCheckCircle color="#02BFFF" />
            </Box>
            Unlimited
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCheckCircle color="#02BFFF" />
            </Box>
            Unlimited
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCloseCircle color="#5A595E" />
            </Box>
          </GridItem>

          <GridItem className="pgrid" textAlign={"left"}>
            <Heading
              size={"sm"}
              display={"flex"}
              w={"120%"}
              position={"relative"}
              right={"60%"}
              h={"126%"}
              fontFamily={"inter"}
            >
              At home workouts
            </Heading>
            <Box
              maxW={"100%"}
              borderBottom={"1px solid #2F3038"}
              m={0}
              position={"relative"}
              left={"63%"}
            ></Box>
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCheckCircle color="#02BFFF" />
            </Box>
            Unlimited
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCheckCircle color="#02BFFF" />
            </Box>
            Unlimited
          </GridItem>
          <GridItem
            className="pgrid"
            borderLeft={"1px solid #2F3038"}
            borderBottom={"1px solid #2F3038"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <AiOutlineCheckCircle color="#02BFFF" />
            </Box>
            Unlimited
          </GridItem>

          <GridItem className="pgrid"></GridItem>
          <GridItem className="pgrid" borderLeft={"1px solid #2F3038"}>
            Starting at ₹833.0 / month{" "}
            <Box display={"flex"} justifyContent={"center"}>
              <Button
                bg={"white"}
                color={"#0B4C6F"}
                _hover={{ color: "black" }}
                m={"10%"}
              >
                <Link to={"/elite"}>BUY NOW</Link>
              </Button>
            </Box>
          </GridItem>
          <GridItem className="pgrid" borderLeft={"1px solid #2F3038"}>
            Starting at ₹545.0 / month{" "}
            <Box display={"flex"} justifyContent={"center"} m={"10%"}>
              <Button
                bg={"white"}
                color={"#0B4C6F"}
                _hover={{ color: "black" }}
              >
                <Link to={"/pro"}>BUY NOW</Link>
              </Button>
            </Box>
          </GridItem>
          <GridItem className="pgrid" borderLeft={"1px solid #2F3038"}>
            Starting at ₹97.0 / month{" "}
            <Box display={"flex"} justifyContent={"center"} m={"10%"}>
              <Button
                bg={"white"}
                color={"#0B4C6F"}
                _hover={{ color: "black" }}
              >
                <Link to={"/home"}>BUY NOW</Link>
              </Button>
            </Box>
          </GridItem>
        </Grid>
        <Text as={"samp"} color={"goldenrod"} fontFamily={"inter"}>
          *18% GST applicable on all cultpass memberships
        </Text>
      </Box>
  );
}

export default Plan_table;
