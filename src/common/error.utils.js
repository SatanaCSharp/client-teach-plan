const catchResponseError = (err) => {
  throw new Error(err.response.data.message);
};
export default catchResponseError;
