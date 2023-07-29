import React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Container, Heading, SimpleGrid, Divider,Image } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import AdminCare from '../components/admin_care';
import './admin.css';

const AdminPanel = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [care_data, setCare_data] = useState([]);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  
  const get_care = async () => {
    const response = await fetch('http://localhost:8585/care/',{
      method:'GET',
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      setCare_data(data);
    } else {
      const err = await response.json();
      console.log(err);
    }
  };
  
  useEffect(() => {
    get_care();
  }, []);

  return(
      <Box borderRadius="md">
        <Tabs id='tabs'>
          <TabList id='tab-list' width={'20%'} flexDir="column" bg="#2d3748" p={5}>
            &nbsp;
            <Tab
              fontSize="lg"
              fontWeight={selectedTab === 0 ? 'bold' : 'normal'}
              _focus={{ boxShadow: 'none' }}
              onClick={() => handleTabChange(0)}
            >
              Profile
            </Tab>
            &nbsp;<Divider colorScheme="white" size="xl" />&nbsp;
            <Tab
              fontSize="lg"
              fontWeight={selectedTab === 1 ? 'bold' : 'normal'}
              _focus={{ boxShadow: 'none' }}
              onClick={() => handleTabChange(1)}
            >
              Lab_tests
            </Tab>
            &nbsp;<Divider colorScheme="white" size="xl" />&nbsp;
            <Tab
              fontSize="lg"
              fontWeight={selectedTab === 2 ? 'bold' : 'normal'}
              _focus={{ boxShadow: 'none' }}
              onClick={() => handleTabChange(2)}
            >
              Memberships
            </Tab>
          </TabList>
        
          <TabPanels p={4} flex={1} bg="gray.200">
            <TabPanel>
              <Box id='profile-panel'>
                <Heading id='profile-head' size={"md"}>Admin</Heading>
                &nbsp;<Divider colorScheme="#2d3748" size="xl" />&nbsp;
                <h2>Admin Content</h2>
                <Image src='../images/admin-bg.png' />
                &nbsp;<Divider colorScheme="#2d3748" size="xl" />&nbsp;
              </Box>
            </TabPanel>
            <TabPanel>
              <Box id='care-panel'>
                <Heading id='care-head' size={"md"}>Lab Tests</Heading>
                &nbsp;<Divider colorScheme="#2d3748" size="xl" />&nbsp;
                <div><h1>Care Packages Details :</h1></div>
                <div>
                  <SimpleGrid columns={[2, 2, 3, 4, 4]} spacing="20px" m={"2%"}>
                    {care_data.map((el) => {
                      return (
                        <AdminCare
                          img={el.img_src}
                          price={el.price}
                          offer_price={el.offer_price}
                          id={el._id}
                        />
                      );
                    })}
                  </SimpleGrid>
                  <Divider colorScheme="#2d3748" size="xl" />
                </div>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box id='pass-panel'>
                <Heading id='pass-head' size={"md"}>Memberships</Heading>
                &nbsp;<Divider colorScheme="#2d3748" size="xl" />&nbsp;
                <div><h1>z-Pass Details</h1></div>
                &nbsp;<Divider colorScheme="#2d3748" size="xl" />&nbsp;
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
  );
};

export default AdminPanel;
