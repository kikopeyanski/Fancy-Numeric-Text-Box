import React from 'react';
import {mount} from 'enzyme';
import ResultChange from '../Containers/ResultChange';

//Initial setup of enzyme wrapper
function setup() {
    const props = {
        step: 2,
        result: 42,
        increaseResult: jest.fn(),
        decreaseResult: jest.fn()
    };

    const wrapper = mount(<ResultChange {...props}/>);

    return {
        props,
        wrapper
    };
}

describe('ResultChange container should', () => {
    test('render ResultDecrease and ResultIncrease components in a div wrapper', () => {
        //Arrange
        const {wrapper} = setup();

        //Act & Assert
        expect(wrapper
            .find('div.step-change-wrapper')
            .exists())
            .toBe(true);
        expect(wrapper
            .find('h1')
            .exists())
            .toBe(true);
        expect(wrapper
            .find('h1')
            .html())
            .toContain('RESULT');
    });
});
describe('ResultChange container should', () => {
    test('pass correct params', () => {
        //Arrange
        const {wrapper, props} = setup();

        //Act
        const wrapperProps = wrapper.props();

        //Assert
        expect(wrapperProps).toEqual(props);
    });
    test('show correct result passed from props', () => {
        //Arrange
        const {wrapper, props} = setup();

        //Act & Assert
        expect(wrapper
            .find('h1')
            .html())
            .toContain(props.result);
    });
});
describe('ResultChange cointainer should', () => {
    test('call decreaseResult when handleResultDecrease is called', () => {
        //Arrange
        const {wrapper, props} = setup();

        //Act
        wrapper.instance().handleResultDecrease();

        //Assert
        expect(props.decreaseResult).toHaveBeenCalled();
    });
    test('call increaseResult when handleREsultIncrease is called', () => {
        //Arrange
        const {wrapper, props} = setup();

        //Act
        wrapper.instance().handleResultIncrease();

        //Assert
        expect(props.increaseResult).toHaveBeenCalled();
    });
    test('call decrease/increase result with correct step passed as props', () => {
        //Arrange
        const {wrapper, props} = setup();

        //Act
        wrapper.instance().handleResultIncrease();

        //Assert
        expect(props.increaseResult).toBeCalledWith(props.step);
    });
});