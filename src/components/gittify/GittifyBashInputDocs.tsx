import { Box, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const GittifyBashInputDocs = () => {
  return (
    <Box p={5}>
      <OrderedList mb={5}>
        <ListItem>Input your username</ListItem>
        <ListItem>Copy the script</ListItem>
        <ListItem>Navigate to your project via terminal</ListItem>
        <ListItem>Use the script</ListItem>
        <ListItem>Copy the json output</ListItem>
      </OrderedList>

      <Text mb={3}>
        The purpose of this script is to allow you to input your GitHub username
        that you use on your project. Once you've done that, navigate to your
        project (that uses Git) via terminal and run the generated script.
      </Text>

      <Text mb={3}>
        The script will output an array of your commits in the following
        structure:
      </Text>

      <SyntaxHighlighter language="json" style={solarizedlight}>
        {`
        {
          "commit": "83908fd9d64e1e27dda93d1ce8a72a5dafad870e",
          "author": "yourUsername <your-email@example.com>",
          "date": "Tue Nov 21 16:03:40 2023 +0100",
          "message": "commit message"
        }
      `}
      </SyntaxHighlighter>
    </Box>
  );
};
