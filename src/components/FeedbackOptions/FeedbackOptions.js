import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div className='button-group'>
        {
                options.map(option => {
                    return (
                        <button className="button" type="button" name={option} onClick={onLeaveFeedback} key={option}> {option} </button>
                    )
                })
            }
    </div>
    )
    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
    
export default FeedbackOptions;

