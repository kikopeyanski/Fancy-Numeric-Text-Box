import React, {Component, PropTypes} from 'react';


class StepInputField extends Component {
  handleStepInputChange = (e) => {
    this.props.onStepChange(e.target.value);
  };

  render() {
    return (
      <div className="numeric-text-box">
        <h1>{this.props.step}</h1>
        <label htmlFor="step">
          Enter the step value
          <input
            onChange={this.handleStepInputChange}
            type="number"
            value={this.props.step}
            placeholder="any number"/>
        </label>
      </div>);
  }
}

StepInputField.propTypes = {
  step: PropTypes.string,
  onStepChange: PropTypes.func
};

export default StepInputField;
