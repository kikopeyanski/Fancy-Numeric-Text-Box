import {combineReducers} from 'redux';
import {DECREASE, INCREASE, CHANGE_STEP} from '../actions';

export function changeStep(state = 1, action) {
    switch (action.type) {
        case CHANGE_STEP:
            return action.step;
        default:
            return state;
    }

}

export function changeResult(state = 0, action) {
    switch (action.type) {
        case DECREASE:
            return state -= action.step;
        case INCREASE:
            return state += action.step;
        default:
            return state;
    }

}

const combined = combineReducers({
    step: changeStep,
    result: changeResult
});

export default combined;
