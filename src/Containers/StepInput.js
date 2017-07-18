import React, {Component, PropTypes} from 'react';
import StepInputField from "../Components/StepInputField";

class StepInput extends Component {
    handleStepChange = (newStep)=>{
        return this.props.onStepChange(newStep)
    };

    render() {
        return (
            <div className="step-input-wrapper">
                <h1>{this.props.step}</h1>
                <StepInputField onStepChange={this.handleStepChange}/>
            </div>
        )
    }
}
export default StepInput;
