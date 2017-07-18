import React, {Component, PropTypes} from 'react';
import ResultDecrease from "../Components/ResultDecrease";
import ResultIncrease from "../Components/ResultIncrease";

class ResultChange extends Component {
    handleResultDecrease = () => {
        this.props.decreaseResult(this.props.step)
    };
    handleResultIncrease = () => {
        this.props.increaseResult(this.props.step)

    };

    render() {
        return (
            <div className="step-change-wrapper">
                <ResultDecrease stepDecrease={this.handleResultDecrease}/>
                <ResultIncrease stepIncrease={this.handleResultIncrease}/>
                <h1>RESULT: {this.props.result}</h1>
            </div>
        )
    }
}

export default ResultChange;