export const CHANGE_STEP = 'CHANGE_STEP';

export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';

export const CHANGE_MAX = 'CHANGE_MAX';
export const CHANGE_MIN = 'CHANGE_MIN';
export const TOGGLE_LIMITER = 'TOGGLE_LIMITER';


export function changeStep(val) {
    return {
        type: CHANGE_STEP,
        step: val
    };
}
export function increase(val) {
    return {
        type: INCREASE,
        step: val
    };
}

export function decrease(val) {
    return {
        type: DECREASE,
        step: val
    };
}

export function changeMaxLimiter(val) {
    return {
        type: CHANGE_MAX,
        max: val
    };
}

export function changeMinLimiter(val) {
    return {
        type: CHANGE_MIN,
        min: val
    };
}
export function toggleLimiter(val) {
    return {
        type: TOGGLE_LIMITER,
        active: val
    };
}