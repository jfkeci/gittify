import "./App.css";
import { Box, ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { Navbar } from "./components/core/navbar/Navbar";
import { ViewHolder } from "./components/core/view-holder/ViewHolder";

function App() {
  const theme = extendTheme({});

  return (
    <ChakraBaseProvider theme={theme}>
      <Box>
        <Navbar />

        <Box p={10}>
          <ViewHolder />
        </Box>
      </Box>
    </ChakraBaseProvider>
  );
}

export default App;
