import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';

const ErrorFallback = ({ error }) => {
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
ErrorFallback.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string.isRequired }).isRequired,
};
export default ErrorFallback;
