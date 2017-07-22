import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StepInputField extends Component {
    handleStepInputChange = (e) => {
        this.props.onStepChange(e.target.value * 1);
    };

    render() {
        return (
            <div className="numeric-text-box">
                <input
                    onChange={this.handleStepInputChange}
                    type="number"
                    placeholder="0"
                />
            </div>);
    }
}
StepInputField.propTypes = {
    step: PropTypes.number.isRequired,
    onStepChange: PropTypes.func.isRequired
};

export default StepInputField;
