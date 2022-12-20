import PropTypes from 'prop-types';

const Notifiation = ({ message }) => {
  return <p>{message}</p>;
};

Notifiation.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notifiation;
