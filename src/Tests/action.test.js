import {CHANGE_STEP, DECREASE, INCREASE} from '../actions';
import {changeStep, increase, decrease} from '../actions';

//Tests for changeStep() action creator
describe('action changeStep()', () => {
    test('should return an object', () => {
        //Arrange & Act & Assert
        expect(typeof changeStep(42)).toBe('object');
    });
    test('should return an action of type CHANGE_STEP', () => {
        //Arrange & Act & Assert
        expect(changeStep(42).type).toEqual(CHANGE_STEP);
    });
    test('should return an action with step provided as parameter', () => {
        //Arrange
        const expectedNumber = 42;
        //Act & Assert
        expect(changeStep(expectedNumber).step).toEqual(expectedNumber);
    });
});

//Tests for increase() action creator
describe('action increase', () => {
    test('should return an object', () => {
        //Arrange & Act & Assert
        expect(typeof increase(42)).toBe('object');
    });
    test('should return an action of type INCREASE', () => {
        //Arrange & Act & Assert
        expect(increase(42).type).toEqual(INCREASE);
    });
    test('should return an action with step provided as parameter', () => {
        //Arrange
        const expectedNumber = 42;
        //Act & Assert
        expect(increase(expectedNumber).step).toEqual(expectedNumber);
    })

});

//Tests for decrease() action creator
describe('action decrease', () => {
    test('should return an object', () => {
        //Arrange & Act & Assert
        expect(typeof decrease(42)).toBe('object');
    });
    test('should return an action of type DECREASE', () => {
        //Arrange & Act & Assert
        expect(decrease(42).type).toEqual(DECREASE);
    });
    test('should return an action with step provided as parameter', () => {
        //Arrange
        const expectedNumber = 42;
        //Act & Assert
        expect(decrease(expectedNumber).step).toEqual(expectedNumber);
    });
});