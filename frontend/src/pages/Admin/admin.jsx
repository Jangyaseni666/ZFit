import React from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AdminCare from "./admin_care";
import "./admin.css";

const AdminPanel = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [care_data, setCare_data] = useState([]);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const get_care = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}care/`, {
      method: "GET",
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

  return (
    <Box borderRadius="md">
      <Tabs id="tabs">
        <TabList
          id="tab-list"
          width={"20%"}
          flexDir="column"
          bg="#2d3748"
          p={5}
        >
          &nbsp;
          <Tab
            fontSize="lg"
            fontWeight={selectedTab === 0 ? "bold" : "normal"}
            _focus={{ boxShadow: "none" }}
            onClick={() => handleTabChange(0)}
          >
            Profile
          </Tab>
          &nbsp;
          <Divider colorScheme="white" size="xl" />
          &nbsp;
          <Tab
            fontSize="lg"
            fontWeight={selectedTab === 1 ? "bold" : "normal"}
            _focus={{ boxShadow: "none" }}
            onClick={() => handleTabChange(1)}
          >
            Lab_tests
          </Tab>
          &nbsp;
          <Divider colorScheme="white" size="xl" />
          &nbsp;
          {/* <Tab
              fontSize="lg"
              fontWeight={selectedTab === 2 ? 'bold' : 'normal'}
              _focus={{ boxShadow: 'none' }}
              onClick={() => handleTabChange(2)}
            >
              Memberships
            </Tab> */}
        </TabList>

        <TabPanels p={4} flex={1} bg="gray.200" id="carepanel">
          <TabPanel>
            <Box id="profile-panel" bgImage={"51245562.png"}>
              {/* <Heading id='profile-head' size={"md"}>Admin</Heading> */}
              &nbsp;
              <Divider colorScheme="#2d3748" size="xl" />
              &nbsp;
              <Text color={"rgba(0, 0, 0, 0)"}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum ipsam sint itaque officiis repellat. Ab, animi
                voluptatum? Nihil aliquid dolores ut sit nobis ipsa repellat
                minus, maxime cumque error repudiandae enim numquam ab
                consequatur voluptatibus libero. Officiis totam necessitatibus
                laboriosam odio, doloremque cumque culpa eum perspiciatis
                repellat architecto ipsam placeat illo? Rerum quos, ullam
                laudantium tempora dicta, id explicabo alias similique dolore
                provident culpa? Aspernatur consectetur repellendus similique ut
                quae, nulla ad exercitationem accusamus officiis repudiandae
                quibusdam tempore neque. Sed dolorem aspernatur quaerat
                voluptate perspiciatis recusandae aliquid quos est? Atque
                voluptatem doloribus dignissimos vel quisquam inventore eum a
                nobis eveniet sint. Cum quibusdam fugit fugiat odit eius, atque
                consequatur corrupti ratione nemo esse iusto alias sequi
                incidunt molestias, at obcaecati a, quidem molestiae explicabo
                necessitatibus autem? Aspernatur assumenda voluptas vel facilis
                iste deleniti sed cupiditate officiis! Illum provident quam,
                cumque animi autem velit, dolores quidem, saepe reiciendis optio
                excepturi mollitia necessitatibus obcaecati beatae ad harum
                numquam modi ullam labore eum pariatur. Vel labore voluptas
                cupiditate facere, vero magnam nobis fugit, saepe tempore
                consequuntur at possimus officia perferendis. Enim, repellat
                pariatur nobis corrupti nostrum placeat consequatur neque,
                deleniti voluptatum officiis vitae modi. Illum dignissimos
                voluptatem quod adipisci praesentium alias exercitationem
                impedit recusandae molestias, sapiente dicta nemo quia vitae
                nobis maiores cupiditate quos minus fuga asperiores. Laboriosam
                laudantium illo error. Consectetur iste animi, deleniti ipsam
                ullam odit consequatur quo officia repellat vel culpa nulla
                autem, beatae perferendis deserunt similique. Molestiae
                reiciendis, tempora enim repellendus, veritatis adipisci
                repudiandae veniam amet nemo vero error suscipit eligendi
                temporibus id natus accusamus sed soluta quisquam tempore quos
                iusto tenetur mollitia. Quas cupiditate voluptate, dolor quia
                corporis illo error, ex voluptatem soluta ut autem sapiente
                blanditiis commodi adipisci quod quibusdam beatae alias rem
                accusamus saepe, debitis harum voluptates. Culpa iusto
                repudiandae ut. Minus neque quaerat quasi nemo veritatis,
                voluptas reprehenderit, tempora placeat debitis quas, officiis
                alias. Et ducimus incidunt vel ad culpa enim! Commodi pariatur,
                id eaque ducimus doloremque animi incidunt autem dolores dicta
                consequuntur quod labore vitae at exercitationem sed facere
                obcaecati laborum suscipit. Autem neque ipsa eaque deserunt
                similique nobis inventore voluptatum id dignissimos iste,
                repellendus ipsum. Quisquam reiciendis eos vero nemo
                voluptatibus est libero dolore quas asperiores, sint quam ex
                atque molestias omnis et hic, labore a minus. Cupiditate rerum
                maxime officia repellendus. Nesciunt rerum adipisci pariatur
                dolor neque, magnam libero quae aliquam inventore eius velit
                error. Dolorum consequuntur minima non necessitatibus aspernatur
                reprehenderit, tempore atque, architecto rem libero aliquam
                laudantium! Doloribus cum provident natus excepturi animi vel
                cupiditate quaerat deleniti veritatis sint. Consectetur
                repudiandae eos cupiditate architecto modi est necessitatibus
                provident sint sequi aperiam quia ullam, libero accusamus
                consequuntur! Officia veritatis dicta nesciunt vero, iste porro
                aliquid obcaecati assumenda sunt doloremque explicabo nisi est
                libero quisquam, aspernatur qui perspiciatis quia repellat
                dolores commodi odio officiis cumque. Distinctio suscipit labore
                dolor repellat architecto ipsam quibusdam ea neque rem quod
                totam non, eius quisquam harum sapiente, veritatis consectetur
                sequi recusandae cum quaerat facere laudantium ipsum! Dolor
                recusandae animi magni tenetur officiis blanditiis illum,
                expedita laudantium!
              </Text>
              {/* <Image id='admin-img-bg' src='5124556.jpg'/> */}
              &nbsp;
              <Divider colorScheme="#2d3748" size="xl" />
              &nbsp;
            </Box>
          </TabPanel>
          <TabPanel>
            <Box id="care-panel" overflowY={"auto"}>
              <Heading id="care-head" size={"md"}>
                Lab Tests
              </Heading>
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
              </div>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AdminPanel;
