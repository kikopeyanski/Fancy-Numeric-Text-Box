import {mount} from 'enzyme'
import  React from "react";
import StepInput from "../Containers/StepInput";

//Initial setup of enzyme wrapper
function setup() {
    const props = {
        step: 42,
        onStepChange: jest.fn(params => params)
    };

    const wrapper = mount(<StepInput {...props}/>);

    return {
        props,
        wrapper
    }

}
describe('StepInput container', () => {
    test('should render a h1 and child component', () => {
        //Arrange
        const {props, wrapper} = setup();
        const stepInputFieldProps = wrapper.find('StepInputField').props();

        //Act & Assert
        expect(wrapper
            .find('div.step-input-wrapper')
            .exists())
            .toBe(true);
        expect(wrapper
            .find('h1')
            .html())
            .toContain(props.step);
        expect(typeof stepInputFieldProps.onStepChange).toEqual('function');
    });
    test('should call parent method', () => {
        //Arrange
        const {props, wrapper} = setup();

        //Act
        wrapper.instance().handleStepChange(42);

        //Assert
        expect(props.onStepChange).toHaveBeenCalled();
    });
    test('should return call parent component with correct parameter', () => {
        //Arrange
        const {wrapper} = setup();
        const expectedNumber = 42;

        //Act
        let result = wrapper.instance().handleStepChange(expectedNumber);

        //Assert
        expect(result).toEqual(expectedNumber);

    })
});