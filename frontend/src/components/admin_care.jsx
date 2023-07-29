import React,{ useState,useEffect} from "react";
import { Card, CardBody, Image, Stack, Text, Box, Flex, Spacer, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalCloseButton, Input
} from "@chakra-ui/react";
import "./admin_care.css";

const CustomModal1 = ({ isOpen, onClose }) => {
  const [care_data, setCare_data] = useState([]);
  const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [offer_price, setOfferPrice] = useState("");
  const get_care = async () => {
    const response = await fetch('http://localhost:8585/care/',{
      method:'GET',
    });
    console.log(response.ok);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setCare_data(data);
    } else {
      const err = await response.json();
      console.log('error');
    }
  };

  
  
  const ID = localStorage.getItem('CareId');
  console.log(care_data);
  const item = care_data.find((el) => el._id === ID);
  console.log(item);
  
  useEffect(() => {
    get_care()
  },[item])

  const handleUpdate = async () => {
    
    try {
      const response = await fetch(`http://localhost:8585/care/update/${ID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
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

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }
  const handleOfferPriceChange = (e) => {
    setOfferPrice(e.target.value)
  }
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            {console.log(item)}
          <input placeholder="Edit Title" m={3} value={item !== undefined?item.title: ""} onChange={handleTitleChange} />
          <input placeholder="Edit Price" m={3} value={item !== undefined?item.price: ""} onChange={handlePriceChange} />
          <input placeholder="Edit Offer Price" m={3} value={item !== undefined?item.offer_price: ""} onChange={handleOfferPriceChange} />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={handleUpdate}>Done</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};


function AdminCare({ img, price, offer_price, id, title }) {

  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const Id=id;
  console.log(Id);

  const handleOpenModal1 = (Id) => {
    localStorage.setItem("CareId",Id);
    console.log(Id);
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };



  return (
    <Box id='card-div'>
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
          <Box id='btns' display={'flex'} p={3}>
            <Button backgroundColor={'blue.500'} color={'white'} onClick={()=> {
              handleOpenModal1(Id);
            }} >Edit</Button>
            <CustomModal1 isOpen={isModalOpen1} onClose={handleCloseModal1} />
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

export default AdminCare;
