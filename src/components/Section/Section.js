import PropTypes from 'prop-types';
import React from 'react';
import './Section.css';
const Section = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;