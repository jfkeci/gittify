import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import useGittifyStore from "../../store/gittify.store";
import { useState } from "react";
import { GittifyDocs } from "./GittifyDocs";

export const GittifyBashInput = () => {
  const [isMessageShown, setIsMessageShown] = useState(false);

  const {
    updateBashScriptSnippet,
    bashScriptSnippet,
    updateBashScript,
    setAuthorName,
    bashScript,
    authorName,
  } = useGittifyStore();

  const showMessage = () => {
    setIsMessageShown(true);

    setTimeout(() => {
      setIsMessageShown(false);
    }, 3000);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(bashScript)
      .then(() => {
        console.log(`Bash script: ${bashScript}`);
      })
      .catch((err) => {
        console.error("Could not copy bash script: ", err);
      });

    showMessage();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorName(event.target.value);
    updateBashScriptSnippet();
    updateBashScript();
  };

  return (
    <Flex direction="column" justifyContent="center" alignItems="center" p={10}>
      <Input
        placeholder="Enter Author name"
        mb={1}
        value={authorName ?? ""}
        onChange={handleInputChange}
      />

      <SyntaxHighlighter language="bash" style={solarizedlight}>
        {bashScriptSnippet}
      </SyntaxHighlighter>

      {isMessageShown && <Text p={3}>Successfully copied!</Text>}

      <Button
        size="md"
        onClick={handleCopy}
        border="2px"
        borderColor="teal.500"
      >
        <strong>Copy</strong>
      </Button>

      <GittifyDocs />
    </Flex>
  );
};
