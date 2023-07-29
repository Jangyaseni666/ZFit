import { useEffect, useState } from "react";
import React from "react";
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Box, Container,Flex } from "@chakra-ui/react";
import './mindcard.css';

const Mindcard = (props) => {
    
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            variant='elevated'
            className="card"
            boxShadow={'md'}
            size={"sm"}
            borderRadius={10}
        >
                <Image className="img" src={props.imgsrc} alt={props.title} />

            <Stack>                
                <CardBody>
                    <Heading size='md' fontFamily='Brandon Text Medium' fontWeight={"thin"}>{props.title}</Heading>

                    <Text p='0' pt={'3'} fontFamily='Brandon Text' color={'InactiveCaptionText'} fontSize={'12px'} noOfLines={5}>
                        {props.desc}
                    </Text>
                </CardBody>
                    <Text ml='5'position={'relative'} bottom={'3'}>
                        {props.packs}
                    </Text>
            </Stack>
        </Card>
    )
}

export default Mindcard;

{/* <Card
            direction={}
            variant='elevated'
            className="card"
            boxShadow={'md'}
            size={"sm"}
        >

            <Stack>                
                <CardBody>
                    <Heading size='md' fontFamily='Brandon Text Medium' fontWeight={"thin"}>{props.title}</Heading>

                    <Text p='0' pt={'3'} fontFamily='Brandon Text' color={'InactiveCaptionText'} fontSize={'12px'}>
                        {props.desc}
                    </Text>
                    <Text>
                        {props.packs}
                    </Text>
                </CardBody>
            </Stack>
        </Card> */}