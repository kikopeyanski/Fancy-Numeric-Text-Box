import React, {Component, PropTypes} from 'react';


class StepIncrease extends Component {


    render() {
        return (
            <div className="step-increase-button">
                <button onClick={this.props.stepIncrease}>+</button>
            </div>
        )
    }
}

StepIncrease.propTypes = {
    step: PropTypes.number,
    stepIncrease: PropTypes.func
};

export default StepIncrease;
