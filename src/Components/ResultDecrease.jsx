import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StepDecrease extends Component {
    render() {
        return (
            <div className="step-change-button" id="btn-decrease">
                <button onClick={this.props.stepDecrease}><span>-</span></button>
            </div>
        );
    }
}

StepDecrease.propTypes = {
    stepDecrease: PropTypes.func.isRequired
};

export default StepDecrease;
