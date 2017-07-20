/* eslint-disable react/require-default-props */
import React, {Component} from 'react';
import PropTypes  from 'prop-types';
import {connect} from 'react-redux';
import StepInput from './StepInput';
import ResultChange from './ResultChange';
import {changeStep, decrease, increase} from '../actions';
import {toJS} from '../utils/to-js';

export class NumericTextBox extends Component {
    render() {
        return (
            <div className="wrapper">
                <StepInput
                    limiter={this.props.limiter}
                    step={this.props.step}
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

NumericTextBox.propTypes = {
    step: PropTypes.number,
    result: PropTypes.number,
    limiter: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number
    }),
    onStepChange: PropTypes.func,
    decreaseResult: PropTypes.func,
    increaseResult: PropTypes.func,
};

export const mapStateToProps = (state) => {
    return {
        step: state.get('step'),
        result: state.get('result'),
        limiter: state.get('limiter')
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
