import React from 'react';

const LoginContext = React.createContext({
  signedInUser: {},
  setSignedInUser: () => {},
});
export default LoginContext;
