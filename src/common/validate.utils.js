export const validateEmail = (email) => {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email).toLowerCase());
};
export const validatePassword = (password) => (password.length >= 6);
