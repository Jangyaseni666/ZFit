import { Card, Box, Flex, Text, Image, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import './info-card.css';

const Panel1 = () => {
    const [transforms, setTransforms] = useState([
        {},
        { transformX: 0, transformY: 0 },
        { transformX: 0, transformY: 0 },
        { transformX: 0, transformY: 0 },
        { transformX: 0, transformY: 0 },
    ]);

    const handleMouseMove = (event, index) => {
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        const myPanel = document.getElementById(`panel-container${index}`);
        const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
        const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;
        const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
        const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

        setTransforms((prevTransforms) => {
            const updatedTransforms = [...prevTransforms];
            updatedTransforms[index] = {
                transformX: percentX * 0.5,
                transformY: percentY * 0.5,
            };
            return updatedTransforms;
        });
    };

    const handleMouseEnter = (index) => {
        const subpanel = document.getElementById(`panel-container${index}`);
        subpanel.style.transition = 'transform 0.1s';
    };

    const handleMouseLeave = (index) => {
        const subpanel = document.getElementById(`panel-container${index}`);
        subpanel.style.transition = 'transform 0.1s';
        setTimeout(() => {
            subpanel.style.transition = '';
        }, 100);

        setTransforms((prevTransforms) => {
            const updatedTransforms = [...prevTransforms];
            updatedTransforms[index] = { transformX: 0, transformY: 0 };
            return updatedTransforms;
        });
    };

    const cardsData = [
        {
            id: 0,
            head: 'Z-Transform',
            body: 'Get coached to lose weight for good'
        },
        {
            id:1,
            head: 'The .fit way',
            body: 'Making health easy, one day at a time'
        },
        {
            id:2,
            head: 'Workout Gear',
            body: 'Everything you need for your workout'
        },
        {
            id:3,
            head: 'Sugar.fit',
            body: 'Reverse Type 2 Diabetes and Prediabetes'
        }
      ];

    return (
        <Grid className="info-cards-grid">
        {cardsData.map((index) => (
            <Box
                key={index.id}
                id={`panel-${index.id}`}
                onMouseMove={(event) => handleMouseMove(event, index.id)}
                onMouseEnter={() => handleMouseEnter(index.id)}
                onMouseLeave={() => handleMouseLeave(index.id)}
            >
            <Box
                id={`panel-container${index.id}`}
                style={{ transform: `perspective(800px) rotateY(${-transforms[index.id].transformX}deg) rotateX(${transforms[index.id].transformY}deg)`}}
            >
                <Flex className="panel-content">
                <Text id='info-text1'>{index.head}</Text>
                <Box id="arrow-image-div">
                    <Image
                    id='arrow-know-more'
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_40,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/four-square-card/glass-circle-arrow.svg"
                    />
                </Box>
                </Flex>
                <Text id='info-text2'>{index.body}</Text>
            </Box>
            </Box>
        ))}
        </Grid>
  );
};

export default Panel1;
