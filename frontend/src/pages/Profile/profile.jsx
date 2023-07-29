import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
import "./profile.css";
import { ImCross } from "react-icons/im";
import { useDisclosure } from "@chakra-ui/react";
import {
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  modalIsOpen,
  ModalCloseButton,
  ModalHeader,
  Button,
  Modal,
  Box,
  Heading
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

// Ensure to bind modal to your appElement
// Modal.setAppElement("#root");

function ProfileUpdate() {
  let temp_email, temp_name, temp_gender, temp_imgsrc;
  const [profiledata, setProfiledata] = useState({});
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userid");
  const navigate = useNavigate();
  console.log(id);
  // const id = "64c372f014b70b74d6f05ae4";
  const getData = async () => {
    console.log(1);
    if (token !== null) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}users/profile/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data[0]);
          setProfiledata(data[0]);
        } else {
          const err = await response.json();
          throw new Error(err);
        }
      } catch (error) {
        console.log(error.msg);
      }
    } else {
      console.log("Not Logged in Yet");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log(profiledata);
  // {profiledata[0].map((el)=>{
  //    temp_email=el.email
  //    temp_name=el.FName
  //    temp_gender=el.gender
  //    temp_imgsrc=el.imgsrc
  // })}

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [add, setAdd] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleorders = () => {
    navigate("/history");
  };

  const handlemedinfo = () => {
    alert("No medical information available");
  };
  const handleps = () => {
    //link to care page
  };
  const handleconnect = () => {
    //link to footer
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const handlepolicy=()=>{

  //     return(
  //       <Modal isOpen={isOpen} onClose={onClose}>
  //         <ModalOverlay />
  //         <ModalContent>
  //           <ModalHeader>Privacy Policy</ModalHeader>
  //           <ModalCloseButton />
  //           <ModalBody>
  //             <p>We at Z.FIT respect your privacy and are committed to protecting it through our compliance with this policy.This policy describes the types of information we may collect from you or that you may provide when you visit the website z-fit.com and our practices for collecting, using, maintaining, protecting, and disclosing that information.
  // </p>
  //           </ModalBody>

  //           <ModalFooter>
  //             <Button colorScheme='blue' mr={3} onClick={onClose}>
  //               Close
  //             </Button>
  //             {/* <Button variant='ghost'>Secondary Action</Button> */}
  //           </ModalFooter>
  //         </ModalContent>
  //       </Modal>
  //     )
  //   }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMobChange = (event) => {
    setMob(event.target.value);
  };
  const handleDobChange = (event) => {
    setDob(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleAddChange = (event) => {
    setAdd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Email: ${email}`);
    closeModal();
  };
  // setUsername(temp_name);
  // console.log(profiledata[0].FName);

  return (
    <div className="totalpro">
      <div className="profile4">
        <div className="profileleft">
          <button onClick={handleorders}>
            <b>Order History</b>
          </button>
          <button onClick={handlemedinfo}>
            <b>Medical Information</b>
          </button>
          <button onClick={handleps}>
            <b>Personalized Services</b>
          </button>
          <button onClick={handleconnect}>
            <b>Connect With Us</b>
          </button>
          <button>
            <b>Privacy Policy</b>
          </button>
        </div>
        <div className="profileshow">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img id="userimage" src="https://i.ibb.co/C78j8m2/signbg.jpg" />
          </div>
          <div className="rightpro">
            <div className="rightpro1">
              <Heading fontSize='24px'>Name : &nbsp; {profiledata.FName}</Heading>
              <Heading fontSize='24px'>Email : &nbsp; {profiledata.email}</Heading>
              <Heading fontSize='24px'>Gender : &nbsp; {profiledata.gender}</Heading>
            </div>
          </div>
          {/* <div className="updateprofile">
            <button
              onClick={onOpen}
              style={{
                border: "2px solid #5a6bad",
                borderRadius: "8px",
                padding: "2%",
                marginTop: "1%",
                fontWeight: "400",
              }}
            >
              <b>Update Profile</b>
            </button>
          </div> */}
        </div>
      </div>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Update Profile"
        className={"modal"}
      > */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Box style={{ display: "flex", flexDirection: "row", gap: "50%" }}>
            <h1
              style={{
                fontSize: "18px",
                fontWeight: "400px",
                marginLeft: "100px",
                padding: "4px",
                border: "1px solid black",
                backgroundColor: "#edf1f5",
                borderRadius: "8px",
              }}
            >
              Update Profile
            </h1>
            <button onClick={closeModal} id="closemodal">
              <i style={{ fontSize: "25px", color: "red" }}>{<ImCross />}</i>
            </button>
          </Box>
          <form onSubmit={handleSubmit}>
            <label className="form-label">
              Profile image:
              <input type="file" onChange={handleFileChange} />
            </label>
            <label className="form-label">
              Username:
              <input
                type="text"
                // value={profiledata[0].FName}
                className="underline-input"
                onChange={handleUsernameChange}
              />
            </label>
            <label className="form-label">
              Email:
              <input
                type="email"
                value={email}
                className="underline-input"
                onChange={handleEmailChange}
              />
            </label>
            <label className="form-label">
              Phone:
              <input
                type="number"
                defaultValue={mob}
                className="underline-input"
                onChange={handleMobChange}
              />
            </label>
            <label className="form-label">
              Address:
              <input
                type="text"
                value={add}
                className="underline-input"
                onChange={handleAddChange}
              />
            </label>
            <label className="form-label">
              Gender:
              <input
                type="text"
                value={gender}
                className="underline-input"
                onChange={handleGenderChange}
              />
            </label>
            <label className="form-label">
              Date of Birth
              <input
                type="date"
                value={dob}
                className="underline-input"
                onChange={handleDobChange}
              />
            </label>

            <button type="submit" id="update">
              Update
            </button>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ProfileUpdate;
