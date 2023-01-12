import PropTypes from 'prop-types';
import React from 'react';
import './NotificationMessage.css';
const NotificationMessage = ({ message }) => {
    return (
        <div>{ message }</div>);
}

NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default NotificationMessage;