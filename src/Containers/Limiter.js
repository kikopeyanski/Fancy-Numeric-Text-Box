/* eslint-disable react/require-default-props */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeMinLimiter, changeMaxLimiter, toggleLimiter} from '../actions';
import {toJS} from '../utils/to-js';

export class Limiter extends Component {
    handleChangeMin = (e) => {
        this.props.changeMin(e.target.value);
    };

    handleChangeMax = (e) => {
        this.props.changeMax(e.target.value);
    };
    handleToggle = ()=>{
        this.props.changeLimiterActive(!this.props.active)
    }

    render() {
        if (this.props.active) {
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
                    <button onClick={this.handleToggle}>Close LIMITER</button>
                </div>
            );
        }
        return (<button onClick={this.handleToggle}>OPEN LIMITER</button>);
    }
}

Limiter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    active: PropTypes.bool,
    changeMin: PropTypes.func,
    changeMax: PropTypes.func,
    changeLimiterActive: PropTypes.func
};

export const mapStateToProps = (state) => {
    return {
        min: state.getIn(['limiter', 'min']),
        max: state.getIn(['limiter', 'max']),
        active: state.getIn(['limiter', 'active'])
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        changeMin: (val) => {
            dispatch(changeMinLimiter(val));
        },
        changeMax: (val) => {
            dispatch(changeMaxLimiter(val));
        },
        changeLimiterActive: (val) => {
            dispatch(toggleLimiter(val));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(toJS(Limiter));
