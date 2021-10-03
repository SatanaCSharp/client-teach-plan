import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';

export const signIn = ({ email, password }) => axios.post(`${API_URL}/auth/sign-in`, { email, password });

export const signUp = ({
  firstName, lastName, email, password,
}) => axios.post(`${API_URL}/auth/sign-up`, {
  firstName, lastName, email, password,
});
