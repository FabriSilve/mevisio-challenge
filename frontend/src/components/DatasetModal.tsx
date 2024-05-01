import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '40rem',
  bgcolor: '#eee',
  border: '1px solid #ddd',
  boxShadow: 24,
  padding: 4,
  borderRadius: 4,
};

const DatasetModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>Select Dataset</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" color="primary">
            Select Dataset to Analyze
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Add form here
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default DatasetModal;
