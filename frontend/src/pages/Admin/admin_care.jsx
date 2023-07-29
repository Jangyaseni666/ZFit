import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Box,
  Flex,
  Spacer,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import "./admin_care.css";

const CustomModal1 = ({ isOpen, onClose }) => {
  const [care_data, setCare_data] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [offer_price, setOfferPrice] = useState("");
  let factor = 0;

  const get_care = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}care/`, {
      method: "GET",
    });
    // console.log(response.ok);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      setCare_data(data);
    } else {
      const err = await response.json();
      console.log(err);
    }
  };

  const ID = localStorage.getItem("CareId");
  // console.log(care_data);
  const item = care_data.find((el) => el._id === ID);
  // if (item !== undefined) {
  //   title = item.title;
  //   price = item.price;
  //   offer_price = item.offer_price;
  // }
  // console.log(item);

  useEffect(() => {
    get_care();
  }, []);

  const handleUpdate = async () => {
    var obj;
    factor = 0;
    if (price == "") {
      factor += 1;
    }
    if (offer_price == "") {
      factor += 2;
    }
    if (title == "") {
      factor += 4;
    }
    if (factor == 0) {
      obj = {
        title: title,
        price: price,
        offer_price: offer_price,
      };
    } else if (factor == 1) {
      obj = {
        title: title,
        price: item.price,
        offer_price: offer_price,
      };
    } else if (factor == 2) {
      obj = {
        title: title,
        price: price,
        offer_price: item.offer_price,
      };
    } else if (factor == 3) {
      obj = {
        title: title,
        price: item.price,
        offer_price: item.offer_price,
      };
    } else if (factor == 4) {
      obj = {
        title: item.title,
        price: price,
        offer_price: offer_price,
      };
    } else if (factor == 5) {
      obj = {
        title: item.title,
        price: item.price,
        offer_price: offer_price,
      };
    } else if (factor == 6) {
      obj = {
        title: item.title,
        price: price,
        offer_price: item.offer_price,
      };
    } else if (factor == 7) {
      obj = {
        title: item.title,
        price: item.price,
        offer_price: item.offer_price,
      };
    }

    console.log(obj);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}care/update/${ID}`,
        {
          method: "PATCH",
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
        get_care();
      } else {
        const err = await response.json();
        throw new Error(err);
      }
    } catch (error) {
      alert(error);
    }
  };

  // const [state,setState]=useEffect({title:item.title,price:item.price,offer_price:item.offer_price})

  // const handleTitleChange = (value) => {
  //   this.setState({
  //     title: value,
  //   });
  // };
  // const handlePriceChange = (e) => {
  //   setPrice(e.target.value);
  // };
  // const handleOfferPriceChange = (e) => {
  //   setOfferPrice(e.target.value);
  // };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Stack>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection={"column"}>
              {/* {console.log(item)} */}
              Title:
              <input
                placeholder="Edit Title"
                m={3}
                defaultValue={item !== undefined ? item.title : ""}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  backgroundColor: "lightgray",
                  borderRadius: "10px",
                  paddingLeft: "2%",
                }}
              />
              Price:
              <input
                placeholder="Edit Price"
                m={3}
                defaultValue={item !== undefined ? item.price : ""}
                onChange={(e) => setPrice(e.target.value)}
                style={{
                  backgroundColor: "lightgray",
                  borderRadius: "10px",
                  paddingLeft: "2%",
                }}
              />
              Offer Price:
              <input
                placeholder="Edit Offer Price"
                m={3}
                defaultValue={item !== undefined ? item.offer_price : ""}
                onChange={(e) => setOfferPrice(e.target.value)}
                style={{
                  backgroundColor: "lightgray",
                  borderRadius: "10px",
                  paddingLeft: "2%",
                }}
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleUpdate}>
              Done
            </Button>
          </ModalFooter>
        </Stack>
      </ModalContent>
    </Modal>
  );
};

function AdminCare({ img, price, offer_price, id, title }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const Id = id;
  // console.log(Id);

  const handleOpenModal1 = (Id) => {
    localStorage.setItem("CareId", Id);
    console.log(Id);
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  return (
    <Box id="card-div">
      <Card
        maxW="sm"
        h={"100%"}
        shadow={0}
        _horizontal={{ scale: [0.9] }}
        className="ccard"
        m={2}
      >
        <CardBody p={0}>
          <Image
            src={img}
            alt="error"
            borderRadius="10px"
            objectFit={"cover"}
            objectPosition={"10%"}
            w={"100%"}
            h={"75%"}
            _hover={{ boxShadow: "base" }}
          />
          <Stack mt="6" spacing="3">
            {price == "" ? (
              <>
                <Text m={0}>
                  <Flex>
                    <Box>Offer Price:</Box>
                    <Spacer />
                    <Box>
                      <b>{offer_price}</b>
                    </Box>
                  </Flex>
                </Text>
              </>
            ) : (
              <>
                <Text m={0}>
                  <Flex>
                    <Box>Price:</Box>
                    <Spacer />
                    <Box as="s" color={"lightgray"}>
                      {price}
                    </Box>
                  </Flex>
                </Text>
                <Text m={0}>
                  <Flex>
                    <Box>Offer Price:</Box>
                    <Spacer />
                    <Box>
                      <b>{offer_price}</b>
                    </Box>
                  </Flex>
                </Text>
              </>
            )}
          </Stack>
          <Box id="btns" display={"flex"} px={"40%"}>
            <Button h={"30%"}
              backgroundColor={"blue.500"}
              color={"white"}
              onClick={() => {
                handleOpenModal1(Id);
              }}
            >
              Edit
            </Button>
            <CustomModal1 isOpen={isModalOpen1} onClose={handleCloseModal1} />
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

export default AdminCare;
