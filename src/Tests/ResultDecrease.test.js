import {mount} from 'enzyme'
import  React from "react";
import ResultDecrease from "../Components/ResultDecrease";

//Initial setup of enzyme wrapper
function setup() {
    const props = {
        step: 42,
        stepDecrease: jest.fn()
    };

    const wrapper = mount(<ResultDecrease {...props}/>);

    return {
        props,
        wrapper
    }

}
describe('ResultDecrease component', () => {
    test('should render a button', () => {
        //Arrange
        const {wrapper} = setup();

        //Act & Assert
        expect(wrapper
            .find('div')
            .hasClass('step-decrease-button'))
            .toBe(true);
        expect(wrapper
            .find('button')
            .exists())
            .toBe(true);
    });
    test('should call parent method if button is pressed', () => {
        //Arrange
        const {wrapper, props} = setup();
        const button = wrapper.find('button');

        //Act
        button.simulate('click');

        //Assert
        expect(props.stepDecrease).toHaveBeenCalled();
    })
});