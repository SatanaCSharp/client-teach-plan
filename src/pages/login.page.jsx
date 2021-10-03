import React from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import Login from '../components/login/login';
import { signInState } from '../state/auth.atom';
import { signedInUserQuery } from '../state/auth.selector';
import LoadableStatus from '../components-ui/loadable-status';
import LoginContext from '../components/login/login.context';

const LoginPage = () => {
  const signedInUser = useRecoilValueLoadable(signedInUserQuery);
  const setSignedInUser = useSetRecoilState(signInState);
  return (
    <>
      <LoadableStatus loadableValue={signedInUser} />
      <LoginContext.Provider value={{ signedInUser, setSignedInUser }}>
        <Login />
      </LoginContext.Provider>
    </>

  );
};

export default LoginPage;
