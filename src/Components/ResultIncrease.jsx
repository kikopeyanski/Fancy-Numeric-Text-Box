import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StepIncrease extends Component {
    render() {
        return (
            <div className="step-increase-button">
                <button onClick={this.props.stepIncrease}>+</button>
            </div>
        );
    }
}

StepIncrease.propTypes = {
    stepIncrease: PropTypes.func.isRequired
};

export default StepIncrease;
