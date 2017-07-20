import {combineReducers} from 'redux-immutable';
import {DECREASE, INCREASE, CHANGE_STEP} from '../actions';
import {CHANGE_MIN, CHANGE_MAX} from '../actions';


export function step(state = 1, action) {
    switch (action.type) {
        case CHANGE_STEP:
            return action.step;
        default:
            return state;
    }
}

export function result(state = 0, action) {
    switch (action.type) {
        case DECREASE:
            return state - action.step;
        case INCREASE:
            return state + action.step;
        default:
            return state;
    }
}

export function limiter(state = {}, action) {
    switch (action.type) {
        case CHANGE_MAX:
            return state.setIn(['max'], action.max * 1);
        case CHANGE_MIN:
            return state.setIn(['min'], action.min * 1);
        default:
            return state;
    }
}

const combined = combineReducers({
    step,
    result,
    limiter
});

export default combined;
