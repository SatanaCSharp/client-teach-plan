import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';

const ErrorSnackbar = ({ error }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isOpen}
      autoHideDuration={10000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error.message}
      </Alert>
    </Snackbar>
  );
};
ErrorSnackbar.propTypes = {
  error: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default ErrorSnackbar;
