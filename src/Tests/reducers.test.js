import {step as changeStep, result as changeResult} from '../reducers';
import {CHANGE_STEP, INCREASE, DECREASE} from '../actions';

//Tests for changeSte() reducer function
describe('reducer changeStep', () => {
    test('should return initial state if incorrect action is passed', () => {
        //Arrange & Act & Assert
        expect(changeStep(undefined, {})).toEqual(1);
    });
    test('should return step from action if CHANGE_STEP is passed as action type', () => {
        //Arrange
        const expectedNumber = 42;

        //Act & Assert
        expect(changeStep(undefined, {
            type: CHANGE_STEP,
            step: expectedNumber
        })).toEqual(expectedNumber);
    });
});

//Tests for changeResult() reducer function
describe('reducer changeResult', () => {
    test('should return initial state if incorrect action is passed', () => {
        //Arrange & Act & Assert
        expect(changeResult(undefined, {})).toEqual(0);
    });
    test('should return state + action step when called with increase action and integer step', () => {
        //Arrange
        const initialState = 2;
        const action = {
            type: INCREASE,
            step: 2
        };
        //Act & Assert
        expect(changeResult(initialState, action))
            .toEqual(initialState + action.step);
    });
    test('should return state + action step when called with increase action and floating point step', () => {
        //Arrange
        const initialState = Math.PI;
        const action = {
            type: INCREASE,
            step: 3.14
        };
        //Act & Assert
        expect(changeResult(initialState, action))
            .toBeCloseTo(initialState + action.step);
    });
    test('should return state = action step when called with decrease action and integer step', () => {
        //Arrange
        const initialState = 2;
        const action = {
            type: DECREASE,
            step: 2
        };
        //Act & Assert
        expect(changeResult(initialState, action))
            .toEqual(initialState - action.step);
    });

    test('should return state = action step when called with decrease action and floating point step', () => {
        //Arrange
        const initialState = Math.PI;
        const action = {
            type: DECREASE,
            step: 3.14
        };
        //Arrange & Act & Assert
        expect(changeResult(initialState, action))
            .toBeCloseTo(initialState - action.step);
    });
});