import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { GittifyDocs } from "../gittify/GittifyDocs";
import { GittifyBashInput } from "../gittify/GittifyBashInput";

export const Gittify = () => {
  return (
    <Box>
      <Card align="center" bg="gray.100">
        <CardHeader>
          <Heading size="md"> Commit script </Heading>
        </CardHeader>
        <CardBody>
          <GittifyBashInput />
        </CardBody>
        <CardFooter>
          <GittifyDocs />
        </CardFooter>
      </Card>
    </Box>
  );
};
