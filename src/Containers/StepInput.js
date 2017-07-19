import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StepInputField from '../Components/StepInputField';

class StepInput extends Component {
    handleStepChange = (newStep) => {
        return this.props.onStepChange(newStep);
    };

    render() {
        return (
            <div className="step-input-wrapper">
                <h1>{this.props.step}</h1>
                <StepInputField onStepChange={this.handleStepChange}/>
            </div>
        );
    }
}

StepInput.propTypes = {
    step: PropTypes.number.isRequired,
    onStepChange: PropTypes.func.isRequired
};

export default StepInput;
