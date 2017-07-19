import {combineReducers} from 'redux-immutable';
import {DECREASE, INCREASE, CHANGE_STEP} from '../actions';

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

const combined = combineReducers({
    step,
    result
});

export default combined;
