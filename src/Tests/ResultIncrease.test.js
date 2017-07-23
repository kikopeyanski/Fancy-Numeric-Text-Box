import {mount} from 'enzyme';
import  React from 'react';
import ResultIncrease from '../Components/ResultIncrease';

//Initial setup of enzyme wrapper
function setup() {
    const props = {
        step: 42,
        stepIncrease: jest.fn()
    };

    const wrapper = mount(<ResultIncrease {...props}/>);

    return {
        props,
        wrapper
    };
}
describe('ResultIncrease component', () => {
    test('should render a button', () => {
        //Arrange
        const {wrapper} = setup();

        //Act & Assert
        expect(wrapper
            .find('div')
            .hasClass('step-change-button'))
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
        expect(props.stepIncrease).toHaveBeenCalled();
    });
});