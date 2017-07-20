import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StepInputField extends Component {
    handleStepInputChange = (e) => {
        this.props.onStepChange(e.target.value * 1);
    };

    render() {
        return (
            <div className="numeric-text-box">
                <label htmlFor="step">
                    Enter the step value
                    <input
                        onChange={this.handleStepInputChange}
                        type="number"
                        value={this.props.step ? this.props.step : 1}
                        placeholder="any number"
                    />
                </label>
            </div>);
    }
}
StepInputField.propTypes = {
    step: PropTypes.number.isRequired,
    onStepChange: PropTypes.func.isRequired
};

export default StepInputField;
