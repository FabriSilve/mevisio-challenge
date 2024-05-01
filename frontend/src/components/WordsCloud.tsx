import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import CloudOff from '@mui/icons-material/CloudOff';

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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h5" color="primary">
              Words Cloud
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
              gap={1}
            >
              {JSON.stringify(analysedWords)}
            </Box>
          </Box>
        ) : null}
      </Box>

    </Box>
  )
};

export default WordsCloud;
