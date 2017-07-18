import React, {Component, PropTypes} from 'react';


class StepDecrease extends Component {


    render() {
        return (
            <div className="step-decrease-button">
                <button onClick={this.props.stepDecrease}>-</button>
            </div>
        )
    }
}

StepDecrease.propTypes = {
    step: PropTypes.number,
    stepDecrease: PropTypes.func
};

export default StepDecrease;
