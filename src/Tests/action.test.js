import {CHANGE_STEP, DECREASE, INCREASE}from '../actions';
import {changeStep, increase, decrease}from '../actions';

describe('action changeStep()', () => {
    test('should return an object', () => {
        expect(typeof changeStep(42)).toBe('object');
    });
    test('should return an action of type CHANGE_STEP', () => {
        expect(changeStep(42).type).toEqual(CHANGE_STEP)
    });
    test('should return an action with step provided as parameter', () => {
        const expectedNumber = 42;
        expect(changeStep(expectedNumber).step).toEqual(expectedNumber);
    })
});

describe('action increase', () => {
    test('should return an object', () => {
        expect(typeof increase(42)).toBe('object');
    });
    test('should return an action of type INCREASE', () => {
        expect(increase(42).type).toEqual(INCREASE)
    });
    test('should return an action with step provided as parameter', () => {
        const expectedNumber = 42;
        expect(increase(expectedNumber).step).toEqual(expectedNumber);
    })

});
describe('action decrease', () => {
    test('should return an object', () => {
        expect(typeof decrease(42)).toBe('object');
    });
    test('should return an action of type DECREASE', () => {
        expect(decrease(42).type).toEqual(DECREASE)
    });
    test('should return an action with step provided as parameter', () => {
        const expectedNumber = 42;
        expect(decrease(expectedNumber).step).toEqual(expectedNumber);
    })

});