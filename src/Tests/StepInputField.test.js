/* eslint-disable no-undef */
import React from 'react';
import {mount} from 'enzyme';
import StepInputField from '../Components/StepInputField';

//Initial setup of enzyme wrapper
function setup() {
    const props = {
        step: 42,
        onStepChange: jest.fn()
    };

    const wrapper = mount(<StepInputField {...props} />);

    return {
        props,
        wrapper
    };
}


describe('StepInputField component', () => {
    test('render an label and an input field', () => {
        //Arrange
        const {wrapper} = setup();

        //Act & Assert
        expect(wrapper
            .find('div')
            .hasClass('numeric-text-box'))
            .toBe(true);
        expect(wrapper.find('input')
            .exists())
            .toBe(true);
    });
    test('should call handleSteInputChange when input is changed', () => {
        //Arrange
        const {wrapper} = setup();
        const input = wrapper.find('input');
        const instance = wrapper.instance();

        // spy on the instance instead of the component
        const spy = spyOn(instance, 'handleStepInputChange');
        wrapper.update();

        //Act
        input.simulate('change', {target: {value: 42}});

        //Assert
        expect(spy).toHaveBeenCalled();
    });
    test('should call parent onStepChange when input is changed', () => {
        //Arrange
        const {wrapper, props} = setup();
        const input = wrapper.find('input');

        //Act
        input.simulate('change', {target: {value: 42}});

        //Assert
        expect(props.onStepChange).toHaveBeenCalled();
    });
});
