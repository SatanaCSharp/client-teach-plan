import { selector, selectorFamily } from 'recoil';
import { signIn, signUp } from '../api/auth.api';
import { signInState, signUpState } from './auth.atom';
import catchResponseError from '../common/error.utils';

const signInQuery = selectorFamily({
  key: 'signInQuery',
  get: (payload) => () => {
    if (!payload) {
      return undefined;
    }
    const { email, password } = payload;

    return signIn({ email, password })
      .then(({ data: response }) => response.data)
      .catch(catchResponseError);
  },
});

export const signedInUserQuery = selector({
  key: 'signedInUserQuery',
  get: ({ get }) => get(signInQuery(get(signInState))),
});

const signUpQuery = selectorFamily({
  key: 'signUpQuery',
  get: ({
    firstName, lastName, email, password,
  }) => () => signUp({
    firstName, lastName, email, password,
  }).then(({ data }) => data).catch(catchResponseError),
});

export const signedUpUserQuery = selector({
  key: 'signedUpUserQuery',
  get: ({ get }) => get(signUpQuery(get(signUpState))),
});
