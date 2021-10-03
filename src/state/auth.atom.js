import { atom } from 'recoil';

export const signInState = atom({
  key: 'signInState',
  default: null,
});

export const signUpState = atom({
  key: 'signUpState',
  default: {
    firstName: '', lastName: '', email: '', password: '',
  },
});
