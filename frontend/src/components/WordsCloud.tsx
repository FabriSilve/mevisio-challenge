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

const HEADER_HEIGHT = '64px';

const Loader = () => {
  const { loading } = useContextState();
  if (!loading) return null;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        color="primary"
        size={100}
        thickness={2}
        variant="indeterminate"
      />
      <Typography variant="overline">
        Processing dataset...
      </Typography>
    </Box>
  )
}

const EmptyData = () => {
  const { analysedWords, loading } = useContextState();
  if (loading) return null;
  if (analysedWords && analysedWords.length) return null;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <CloudOff color="primary" sx={{ fontSize: 150 }} />
      <Typography variant="overline" >
        Select a dataset to generate the words cloud!
      </Typography>
    </Box>
  )
}

const WordsChart = () => {
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

  if (loading) return null;
  if (!analysedWords || !analysedWords.length) return null;

  return (
    <ReactWordcloud
      words={analysedWords}
      size={wordsCloudSize}
      options={options}
      callbacks={callbacks}
    />
  )
}

const WordsCloud = () => (
  <Box
    marginTop={HEADER_HEIGHT}
    flexGrow={1}
    width="100%"
    display="flex"
    alignContent="center"
    justifyContent="center"
    maxHeight={`calc(100% - ${HEADER_HEIGHT})`}
    component="section"
  >
    <Box margin="auto" maxHeight="100%">
      <Loader />
      <EmptyData />
      <WordsChart />
    </Box>
  </Box>
);

export default WordsCloud;
