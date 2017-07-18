import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import StepInput from './StepInput';
import {changeStep, decrease, increase} from "../actions";
import ResultChange from "./ResultChange";


class NumericTextBox extends Component {
    render() {
        return (
            <div className="wrapper">
                <StepInput step={this.props.step}
                           onStepChange={this.props.onStepChange}/>
                <ResultChange
                    step={this.props.step}
                    result={this.props.result}
                    decreaseResult={this.props.decreaseResult}
                    increaseResult={this.props.increaseResult}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        step: state.step,
        result: state.result
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStepChange: (val) => {
            dispatch(changeStep(val));
        },
        decreaseResult: (val) => {
            dispatch(decrease(val))
        },
        increaseResult: (val) => {
            dispatch(increase(val))
        }
    };
};

NumericTextBox = connect(mapStateToProps, mapDispatchToProps)(NumericTextBox);
export default NumericTextBox;
