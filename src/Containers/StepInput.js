import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StepInputField from '../Components/StepInputField';

class StepInput extends Component {
    handleStepChange = (newStep) => {
        if (this.props.limiter.min <= newStep
            && newStep <= this.props.limiter.max) {
            return this.props.onStepChange(newStep);
        }
        return this.props.onStepChange(this.props.step);
    };

    render() {
        return (
            <div className="step-input-wrapper">
                <h1>{this.props.step}</h1>
                <StepInputField step={this.props.step} onStepChange={this.handleStepChange}/>
            </div>
        );
    }
}

StepInput.propTypes = {
    step: PropTypes.number.isRequired,
    onStepChange: PropTypes.func.isRequired,
    limiter: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number
    }).isRequired,
};

export default StepInput;
