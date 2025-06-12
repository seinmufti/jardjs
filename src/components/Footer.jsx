import React from "react";
import { Text, Spacer, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Spacer></Spacer>
      <HStack justifyContent={"center"}>
        Developed by
        <Text fontSize="3xl" fontFamily="'Pacifico', cursive" color="green.600">
          sein
        </Text>
      </HStack>
    </>
  );
};

export default Footer;
