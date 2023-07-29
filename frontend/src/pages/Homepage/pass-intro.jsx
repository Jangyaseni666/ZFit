import { Box, Button, Heading, Image, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import './pass-intro.css';

const CultIntroCard = ({ imageSrc1,imageSrc, title, features }) => {
  
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  }

  return (
    <Box id='cult-intro-card'>
      <Box className='intro-card-image-div'>
        <Box className='intro-card-image-text'>
          <Box className='image-text-inner1'>
            <Box id='image-text1'><Text>{title}</Text></Box>
          </Box>
          <Box className='image-text-inner2'>
            <Image id='image-text2' src={imageSrc} />
          </Box>
        </Box>
        <Image id='intro-card-image' src={imageSrc1} />
      </Box>
      <Box className='intro-card-text-div'>
        <Heading id='intro-div-text1'>Unlimited access to</Heading>
        <ul>
          {features.map((feature, index) => (
            <li key={index} id='intro-div-text2'>
              {feature}
            </li>
          ))}
        </ul>
      </Box>
      <Box className='intro-card-btn-div'>
        <Box className='intro-card-btn-div-inner'>
          <Box className='intro-card-btns'>
            <Button id='btn1' bgColor={'#2f313c'} pt={"5%"}>
              <Text id='btn1-text'>TRY FOR FREE</Text>
            </Button>
            <Button id='btn2' pt={"5%"}>
              <Text id='btn2-text'>LEARN MORE</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const CultIntroSection = () => {
  const cardsData = [
    {
      imageSrc1: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png',
      title: 'z-pass',
      imageSrc: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png',
      features: [
        'Unlimited access to At-center group classes',
        'All ELITE & PRO gyms',
        'At-home live workouts',
      ],
    },
    {
      imageSrc1: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png',
      title: 'z-pass',
      imageSrc: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png',
      features: [
        'All PRO gyms',
        '2 Sessions/m at ELITE gyms & group classes',
        'At-home live workouts',
      ],
    },
    {
      imageSrc1: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png',
      title: 'z-pass',
      imageSrc: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg',
      features: [
        'At home workouts',
        'Celebrity Workouts',
        'Goal-based Workouts and Meditation Sessions',
      ],
    },
  ];

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box className='cult-intro-div' w={"100vw"}>
      <Box className='cult-intro-div-inner1'>
        <Box className='cult-intro-bg1'>
          <Image id='cult-intro-bg-img' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg' />
        </Box>
        <Box className='cult-intro-bg2'>
          <Image id='cult-intro-bg-img' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/gradient-circle/golden-blur-circle.svg'/>
        </Box>
      </Box>
      <Box className='cult-intro-div-inner2'>
        <Box className='cult-intro-head'>
          {/* <Image id='cult-intro-image' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_259,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg' /> */}
          <Heading size={"3xl"} color={"white"} fontFamily={"inter"} textAlign={"center"} >Z-PASS</Heading>
        </Box>
        {/* <Box className='cult-intro-cards-div'> */}
        <Box className='cult-intro-cards-div' display={"flex"} flexDir={["column","column","column","row",]} pl={["25vw","25vw","25vw","0vw"]}>
          {/* <SimpleGrid className='cult-intro-cards-div' columns={["1","1","1","3"]}> */}
            {cardsData.map((card, index) => (
              <CultIntroCard key={index} {...card} />
            ))}
          {/* </SimpleGrid>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default CultIntroSection;


{/* <Box className='cult-intro-div'>
          <Box className='cult-intro-div-inner'>
            <Box className='cult-intro-head'>
              <Image id='cult-intro-image' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_259,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg'/>
            </Box>
            <Heading id='cult-intro-head2'>One membership for all your fitness needs</Heading>
            <Box className='cult-intro-cards-div'>
              <Card id='cult-intro-card'>
                <Box className='intro-card-image-div'>
                  <Box className='intro-card-image-text'>
                    <Box className='image-text-inner1'>
                    <Box id='image-text1'><Text>z-pass</Text></Box>
                    </Box>
                    <Box className='image-text-inner2'>
                      <Image id='image-text2' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png'/>
                    </Box>
                  </Box>
                  <Image id='intro-card-image' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png'/>
                </Box>
                <Box className='intro-card-text-div'>
                  <Heading id='intro-div-text1'>Unlimited access to</Heading>
                  <UnorderedList>
                    <ListItem id='intro-div-text2'>At-center group classes</ListItem>
                    <ListItem id='intro-div-text2'>All ELITE & PRO gyms</ListItem>
                    <ListItem id='intro-div-text2'>At-home live workouts</ListItem>
                  </UnorderedList>
                </Box>
                <Box className='intro-card-btn-div'>
                  <Box className='intro-card-btn-div-inner'>
                    <Box className='intro-card-btns'>
                      <Button id='btn1'>
                        <Text id='btn1-text'>TRY FOR FREE</Text>
                      </Button>
                      <Button id='btn2'>
                        <Text id='btn2-text'>LEARN MORE</Text>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card id='cult-intro-card'>
                <Box className='intro-card-image-div'>
                  <Box className='intro-card-image-text'>
                    <Box className='image-text-inner1'>
                    <Box id='image-text1'><Text>z-pass</Text></Box>
                    </Box>
                    <Box className='image-text-inner2'>
                      <Image id='image-text2' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png'/>
                    </Box>
                  </Box>
                  <Image id='intro-card-image' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png'/>
                </Box>
                <Box className='intro-card-text-div'>
                  <Heading id='intro-div-text1'>Unlimited access to</Heading>
                  <UnorderedList>
                    <ListItem id='intro-div-text2'>All PRO gyms</ListItem>
                    <ListItem id='intro-div-text2'>2 Sessions/m at ELITE gyms& group classes</ListItem>
                    <ListItem id='intro-div-text2'>At-home live workouts</ListItem>
                  </UnorderedList>
                </Box>
                <Box className='intro-card-btn-div'>
                  <Box className='intro-card-btn-div-inner'>
                    <Box className='intro-card-btns'>
                      <Button id='btn1'>
                        <Text id='btn1-text'>TRY FOR FREE</Text>
                      </Button>
                      <Button id='btn2'>
                        <Text id='btn2-text'>LEARN MORE</Text>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card id='cult-intro-card'>
                <Box className='intro-card-image-div'>
                  <Box className='intro-card-image-text'>
                    <Box className='image-text-inner1'>
                    <Box id='image-text1'><Text>z-pass</Text></Box>
                    </Box>
                    <Box className='image-text-inner2'>
                      <Image id='image-text2' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg'/>
                    </Box>
                  </Box>
                  <Image id='intro-card-image' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png'/>
                </Box>
                <Box className='intro-card-text-div'>
                  <Heading id='intro-div-text1'>Unlimited access to</Heading>
                  <UnorderedList>
                    <ListItem id='intro-div-text2'>At home workouts</ListItem>
                    <ListItem id='intro-div-text2'>Celebrity Workouts</ListItem>
                    <ListItem id='intro-div-text2'>Goal-based Workouts and Meditation Sessions</ListItem>
                  </UnorderedList>
                </Box>
                <Box className='intro-card-btn-div'>
                  <Box className='intro-card-btn-div-inner'>
                    <Box className='intro-card-btns'>
                      <Button id='btn1'>
                        <Text id='btn1-text'>TRY FOR FREE</Text>
                      </Button>
                      <Button id='btn2'>
                        <Text id='btn2-text'>LEARN MORE</Text>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Box> */}