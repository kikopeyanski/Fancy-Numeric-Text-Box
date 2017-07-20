/* eslint-disable react/require-default-props */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeMinLimiter, changeMaxLimiter} from '../actions';
import {toJS} from '../utils/to-js';

export class Limiter extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleChangeMin = (e) => {
        this.props.changeMin(e.target.value);
    };

    handleChangeMax = (e) => {
        this.props.changeMax(e.target.value);
    };

    render() {
        return (
            <div className="limiter-wrapper">
                <label htmlFor="min">
                    Min:
                    <input
                        type="number"
                        name="min"
                        onChange={this.handleChangeMin}
                        placeholder={this.props.min}
                    />
                </label>
                <label htmlFor="min">
                    Max:
                    <input
                        type="number"
                        name="max"
                        onChange={this.handleChangeMax}
                        placeholder={this.props.max}
                    />
                </label>
            </div>
        );
    }
}

Limiter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    changeMin: PropTypes.func,
    changeMax: PropTypes.func
};

export const mapStateToProps = (state) => {
    return {
        min: state.getIn(['limiter', 'min']),
        max: state.getIn(['limiter', 'max'])
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        changeMin: (val) => {
            dispatch(changeMinLimiter(val));
        },
        changeMax: (val) => {
            dispatch(changeMaxLimiter(val));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(toJS(Limiter));
