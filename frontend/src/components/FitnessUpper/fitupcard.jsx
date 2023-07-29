import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Text } from "@chakra-ui/react";
import React,{useState} from "react";
import './fitupcard.css'

const FitUpCard = (props) => {
    return(
        <Card align='center' id='card'>
            <CardHeader>
                <p id="title" fontFamily={'Brandon Text'} size='md'>{props.title}</p>
            </CardHeader>
            <CardBody padding={0}>
                <Image src={props.src} alt='error' id='img' w='18' h='5' />
            </CardBody>
            <CardFooter>
                <p id="desc">{props.desc}</p>
            </CardFooter>
        </Card>
    )
}

export default FitUpCard;