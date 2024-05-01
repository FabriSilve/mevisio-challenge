import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import CloudOff from '@mui/icons-material/CloudOff';

import ReactWordcloud from 'react-wordcloud';

import { useContextState } from "../ContextProvider";

const WordsCloud = () => {
  const { analysedWords, loading } = useContextState();
  return (
    <Box
      marginTop={8}
      flexGrow={1}
      width="100%"
      display="flex"
      alignContent="center"
      justifyContent="center"
      maxHeight="100%"
      overflow="scroll"
      component="section"
    >
      <Box margin="auto">
        {loading ? (
          <CircularProgress color="inherit" />
        ) : null}
        {!analysedWords || !analysedWords.length ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <CloudOff color="primary" sx={{ fontSize: 200 }} />
            <Typography variant="overline" >
              Select a dataset to generate the word clouds
            </Typography>
          </Box>
        ) : null}
        {analysedWords && analysedWords.length ? (
          <ReactWordcloud
            words={analysedWords}
          />
        ) : null}
      </Box>

    </Box>
  )
};

export default WordsCloud;
