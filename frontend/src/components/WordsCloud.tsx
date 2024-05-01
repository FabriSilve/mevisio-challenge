import { useMemo } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import CloudOff from "@mui/icons-material/CloudOff";

import ReactWordcloud, {
  Optional,
  Options,
  CallbacksProp,
} from "react-wordcloud";

import { useContextState } from "../ContextProvider";

const WordsCloud = () => {
  const { analysedWords, loading } = useContextState();

  const wordsCloudSize: [number, number] = useMemo(() => [
    window.innerWidth,
    window.innerHeight * 0.9,
  ], []);
  const options: Optional<Options> = useMemo(() => ({
    fontSizes: [30, 110],
  }), []);

  const callbacks: CallbacksProp = useMemo(() => ({
    getWordTooltip: (_) => '',
  }), []);
  return (
    <Box
      marginTop="64px"
      flexGrow={1}
      width="100%"
      display="flex"
      alignContent="center"
      justifyContent="center"
      maxHeight="calc(100% - 64px)"
      component="section"
    >
      <Box margin="auto" maxHeight="100%">
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
            size={wordsCloudSize}
            options={options}
            callbacks={callbacks}
          />
        ) : null}
      </Box>
    </Box>
  )
};

export default WordsCloud;
