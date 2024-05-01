import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FilterDrama from "@mui/icons-material/FilterDrama";

import DatasetModal from "./DatasetModal";

const AppHeader = () => {
  return (
    <Box width="100%">
      <AppBar position="fixed">
        <Toolbar>
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="row"
            gap={1}
            alignItems="center"
            justifyContent="start"
          >
            <Typography variant="h6">Words</Typography>
            <FilterDrama />
          </Box>
          <DatasetModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
