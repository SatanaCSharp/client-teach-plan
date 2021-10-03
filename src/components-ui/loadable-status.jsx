import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './spiner';
import ErrorSnackbar from './error-snackbar';

const LoadableStatus = ({ loadableValue }) => {
  const { state } = loadableValue;
  if (state === 'loading') {
    return <Spinner />;
  }

  if (state === 'hasError') {
    return <ErrorSnackbar error={loadableValue.contents} />;
  }
  return null;
};

LoadableStatus.propTypes = {
  loadableValue: PropTypes.shape({
    state: PropTypes.string,
    contents: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    valueMaybe: PropTypes.func.isRequired,
    valueOrThrow: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
  }).isRequired,
};
// LoadableStatus.defaultProps = {
//   loadableValue: {
//
//   },
// };

export default LoadableStatus;
