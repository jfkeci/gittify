import {
  Box,
  Card,
  CardBody,
  Accordion,
  CardHeader,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { GittifyBashInputDocs } from "./GittifyBashInputDocs";

export const GittifyDocs = () => {
  return (
    <Card mt={10} width="100%">
      <CardHeader>Docs & Instructions</CardHeader>
      <CardBody>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  1. Bash Script
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <GittifyBashInputDocs />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  2. Commit Upload
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>...TBD</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};
