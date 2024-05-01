import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AppHeader = () => {
  return (
    <Box width="100%">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Words Cloud Generator
          </Typography>
          <Button color="inherit">Select Dataset</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
