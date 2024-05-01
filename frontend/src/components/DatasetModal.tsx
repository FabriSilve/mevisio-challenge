import {
  useState,
  useCallback,
  ChangeEvent,
  MouseEventHandler,
} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';

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
  const [file, setFile] = useState<Blob | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event || !event.target || !event.target.files) return;
    setFile(event.target.files[0]);
  }, [setFile])

  const handleSubmit = useCallback<MouseEventHandler<HTMLElement>>((event) => {
    event.preventDefault();
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    fetch('/api/file',
      {
        method: 'post',
        body: formData,
      },
    ).then(async (response) => console.log(await response.json()));
  }, [file]);

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>Select Dataset</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={style}
        >
          <Typography id="modal-title" variant="h6" component="h2" color="primary">
            Select Dataset to Analyze
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            marginTop={2}
          >
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Upload the file you want to analyze.
            </Typography>
            <Input type="file" onChange={handleFileChange} />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap={2}
            marginTop={4}
          >
            <Button onClick={handleClose} variant="outlined" color="error">Cancel</Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              disabled={!file}
            >
              Send Dataset
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default DatasetModal;
