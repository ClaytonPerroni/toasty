import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Toast({open, setOpen, data, handleLike}) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button size="small" onClick={() => handleLike(data)}>
        LIKE
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        open={!!open}
        onClose={handleClose}
        message={
          <div style={{
            lineHeight: '0em'
          }}>
          <p>{`${data?.data?.firstName} ${data?.data?.lastName}`}</p>
          <p>{`${data?.data?.email}`}</p>
          </div>
        }
        action={action}
      />
    </>
  );
}