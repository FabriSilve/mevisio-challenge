import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import DatasetModal from './DatasetModal';

const AppHeader = () => {
  return (
    <Box width="100%">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Words Cloud Generator
          </Typography>
          <DatasetModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
