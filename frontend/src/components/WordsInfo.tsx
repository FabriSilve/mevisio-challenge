import { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import { useContextState } from "../ContextProvider";
import { Typography } from "@mui/material";

const WordsInfo = () => {
  const [open, setOpen] = useState(false);

  const { analysedWords } = useContextState();

  if (!analysedWords || !analysedWords.length) return null;

  return (
    <Box
      position="absolute"
      right={8}
      bottom={8}
      width="content"
    >
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        size="small"
      >
        See Analysis
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
       <Box
        sx={{ width: 'auto', minWidth: 250 }}
        role="presentation"
        onClick={() => setOpen(false)}
        onKeyDown={() => setOpen(false)}
      >
        <Typography variant="h6" align="center" color="primary">Words Analysis</Typography>
        <List>
          {analysedWords.map((word, index) => (
            <Box
              key={word.text}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              paddingX={4}
              bgcolor={index % 2 === 0 ? '#edf3fa' : '#fff'}
            >
              <Typography variant="overline">{word.text}: </Typography>
              <Typography variant="button">{word.value}</Typography>
            </Box>
          ))}
        </List>
      </Box>
      </Drawer>
    </Box>
  );
}

export default WordsInfo;
