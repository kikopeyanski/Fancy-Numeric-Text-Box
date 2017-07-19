/* eslint-disable react/require-default-props */
import React, {Component} from 'react';
import PropTypes  from 'prop-types';
import {connect} from 'react-redux';
import StepInput from './StepInput';
import {changeStep, decrease, increase} from '../actions';
import ResultChange from './ResultChange';
import {toJS} from '../utils/to-js';


export class NumericTextBox extends Component {
    render() {
        return (
            <div className="wrapper">
                <StepInput step={this.props.step}
                           onStepChange={this.props.onStepChange}
                />
                <ResultChange
                    step={this.props.step}
                    result={this.props.result}
                    decreaseResult={this.props.decreaseResult}
                    increaseResult={this.props.increaseResult}
                />
            </div>
        );
    }
}

NumericTextBox.defaultProps = {
    step: 1,
    result: 0
};

NumericTextBox.propTypes = {
    step: PropTypes.number,
    result: PropTypes.number,
    onStepChange: PropTypes.func,
    decreaseResult: PropTypes.func,
    increaseResult: PropTypes.func
};

export const mapStateToProps = (state) => {
    return {
        step: state.get('step'),
        result: state.get('result')
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onStepChange: (val) => {
            dispatch(changeStep(val));
        },
        decreaseResult: (val) => {
            dispatch(decrease(val));
        },
        increaseResult: (val) => {
            dispatch(increase(val));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(NumericTextBox));
