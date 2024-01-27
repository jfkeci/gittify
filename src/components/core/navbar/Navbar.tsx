import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Navbar: React.FC = () => {
  return (
    <Box bg="teal.500" px={4} mb={10}>
      <Flex h={12} alignItems={"center"} justifyContent={"space-between"}>
        <Text
          fontSize={"xl"}
          fontWeight={"bold"}
          color={"white"}
          marginLeft={2}
        >
          gittify
        </Text>
      </Flex>
    </Box>
  );
};
