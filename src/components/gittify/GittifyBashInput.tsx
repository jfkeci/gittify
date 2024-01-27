import { useState } from "react";
import useGittifyBashStore from "../../store/gittify-bash.store";
import { Box, Button, Flex, Input, Text, Tooltip } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const GittifyBashInput = () => {
  const [isMessageShown, setIsMessageShown] = useState(false);

  const {
    updateBashScriptSnippet,
    setCommitSinceDate,
    bashScriptSnippet,
    updateBashScript,
    setAuthorName,
    bashScript,
    authorName,
  } = useGittifyBashStore();

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

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    setCommitSinceDate(formattedDate);

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

      <Tooltip label="Date from which you want to filter the commits">
        <Input
          size="md"
          type="date"
          placeholder="Date from which you want to filter the commits"
          mt={1}
          mb={1}
          onChange={handleDateChange}
        />
      </Tooltip>

      <Tooltip label={bashScript}>
        <Box>
          <SyntaxHighlighter language="bash" style={solarizedlight}>
            {bashScriptSnippet}
          </SyntaxHighlighter>
        </Box>
      </Tooltip>

      {isMessageShown && <Text p={3}>Successfully copied!</Text>}

      <Button
        size="md"
        onClick={handleCopy}
        border="2px"
        borderColor="teal.500"
      >
        <strong>Copy</strong>
      </Button>
    </Flex>
  );
};
