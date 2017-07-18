import {changeStep,changeResult} from '../reducers'
import {CHANGE_STEP,INCREASE,DECREASE} from '../actions'

describe('reducer changeStep', () => {
    test('should return initial state if incorrect action is passed', () => {
        expect(changeStep(undefined, {})).toEqual(1)
    });
    test('should return step from action if CHANGE_STEP is passed as action type', () => {
        const expectedNumber = 42;
        expect(changeStep(undefined, {
            type: CHANGE_STEP,
            step: expectedNumber
        })).toEqual(expectedNumber)
    })
});

describe('reducer changeResult',()=>{
    test('should return initial state if incorrect action is passed',()=>{
        const expectedNumber = 42;
        expect(changeResult(undefined,{})).toEqual(0);
    });
    test('should return state + action step when called with increase action and integer step',()=>{
        const initialState = 2;
        const action = {
            type:INCREASE,
            step: 2
        };
        expect(changeResult(initialState,action))
            .toEqual(initialState+action.step);
    });
    test('should return state + action step when called with increase action and floating point step',()=>{
        const initialState = Math.PI;
        const action = {
            type:INCREASE,
            step: 3.14
        };
        expect(changeResult(initialState,action))
            .toBeCloseTo(initialState+action.step);
    });
    test('should return state = action step when called with decrease action and integer step',()=>{
        const initialState = 2;
        const action = {
            type:DECREASE,
            step: 2
        };
        expect(changeResult(initialState,action))
            .toEqual(initialState -action.step);
    });

    test('should return state = action step when called with decrease action and floating point step',()=>{
        const initialState = Math.PI;
        const action = {
            type:DECREASE,
            step: 3.14
        };
        expect(changeResult(initialState,action))
            .toBeCloseTo(initialState -action.step);
    })
});