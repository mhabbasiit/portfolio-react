import { AlertTitle, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
  <VStack  align="left" bg="white" borderRadius="10px">
     
     <Image borderRadius="10px"
    src={imageSrc}
  />
  <Heading size='md' pl="4" pr="4" pt="2" color="black">{title}</Heading>
  <Text  color="gray" pl="4" pr="4" >{description}</Text>
  <HStack align="left" color="black"  pb="5" pl="5"  pt="3" > 
   <Text> See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
   </HStack>
  </VStack>
  
  )
};

export default Card;
