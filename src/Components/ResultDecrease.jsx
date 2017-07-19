import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StepDecrease extends Component {
    render() {
        return (
            <div className="step-decrease-button">
                <button onClick={this.props.stepDecrease}>-</button>
            </div>
        );
    }
}

StepDecrease.propTypes = {
    stepDecrease: PropTypes.func.isRequired
};

export default StepDecrease;
