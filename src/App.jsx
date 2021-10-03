import React from 'react';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/login.page';

function App() {
  return (
    <RecoilRoot>
      <LoginPage />
    </RecoilRoot>
  );
}

export default App;
