import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { validateEmail, validatePassword } from '../../common/validate.utils';
import { container, containerStyles, inputStyles } from './login.styles';
import LoginContext from './login.context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [hasEmailError, setHasEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const { setSignedInUser } = useContext(LoginContext);
  const handleChangeEmail = (event) => setEmail(event.target.value);

  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleClick = () => {
    setSignedInUser({ email, password });
  };

  useEffect(() => {
    if (email) {
      const hasEmailValid = validateEmail(email);
      setHasEmailError(!hasEmailValid);
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      const hasPasswordValid = validatePassword(password);
      setHasPasswordError(!hasPasswordValid);
    }
  }, [password]);

  const isSubmitDisabled = !email || hasEmailError || !password || hasPasswordError;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Box
        sx={containerStyles}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography sx={{ marginBottom: '20px' }} component="h1" variant="h5">
          Sign in
        </Typography>

        <TextField
          sx={inputStyles}
          error={hasEmailError}
          type="email"
          value={email}
          onChange={handleChangeEmail}
          id="outlined-required"
          label="Email"
        />

        <TextField
          sx={inputStyles}
          error={hasPasswordError}
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
          autoComplete="current-password"
        />
        <Button
          sx={inputStyles}
          disabled={isSubmitDisabled}
          variant="outlined"
          onClick={handleClick}
        >
          Sign In
        </Button>
      </Box>
    </motion.div>

  );
};

export default Login;
