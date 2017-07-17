import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changeStep} from '../actions';
import StepInputField from "../Components/StepInputField";


const mapStateToProps = (state) => {
  return {
    step: state.step
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStepChange: (val) => {
      dispatch(changeStep(val));
    }
  };
};

const NumericTextBox =
  connect(
    mapStateToProps,
    mapDispatchToProps)
  (StepInputField);

export default NumericTextBox;
