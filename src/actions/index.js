export const CHANGE_STEP = 'CHANGE_STEP';
export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';

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
    }
}

export function decrease(val) {
    return {
        type: DECREASE,
        step: val
    }
}