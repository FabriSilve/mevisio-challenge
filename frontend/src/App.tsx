import Box from "@mui/material/Box";

import AppHeader from "./components/AppHeader";
import WordsCloud from "./components/WordsCloud";

const App = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="100vh"
  >
    <AppHeader />
    <WordsCloud />
  </Box>
);

export default App;
