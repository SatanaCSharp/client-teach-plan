import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Spinner = () => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: '#ffffff7a',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      opacity: 0.3,
    }}
  >
    <CircularProgress
      size={70}
      sx={{
        opacity: 1,
      }}
    />
  </Box>
);

export default Spinner;
