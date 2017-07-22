/* eslint-disable react/jsx-pascal-case */
import {shallow, mount} from 'enzyme';
import React from 'react';
import {NumericTextBox} from '../Containers/NumericTextBox';
import _NumericTextBox from '../Containers/NumericTextBox';
import {fromJS} from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux-immutable';

//---------------------------------------------------
//REALLY DOUBT THIS IS THE CORRECT WAY OF TESTING HOC
import {step, result} from '../reducers';
//---------------------------------------------------

//---------------------------------------------------
//EXPORTING mapStateToProps | mapDispatchToProps SUGGESTED IN STACKOVERFLOW
import {mapStateToProps} from '../Containers/NumericTextBox';
//---------------------------------------------------

//Initial setup of enzyme wrapper
function setup() {
    const props = {
        step: 2,
        result: 42,
        onStepChange: jest.fn(),
        decreaseResult: jest.fn(),
        increaseResult: jest.fn(),
        limiter: {
            min: 1,
            max: 49
        }
    };
    const wrapper = mount(<NumericTextBox {...props}/>);

    return {
        props,
        wrapper
    };
}
function shallowSetup() {
    const props = {
        step: 2,
        result: 42,
        onStepChange: jest.fn(),
        decreaseResult: jest.fn(),
        increaseResult: jest.fn()
    };
    const wrapper = shallow(<NumericTextBox {...props}/>);

    return {
        props,
        wrapper
    };
}
function wrappedSetup() {
    //---------------------------------------------------
    //REALLY DOUBT THIS IS THE CORRECT WAY OF TESTING HOC
    // const functionsProps = {
    //     onStepChange: jest.fn(),
    //     increaseResult: jest.fn(),
    //     decreaseResult: jest.fn()
    // };
    const initialState = {step: 1, result: 0};
    const immutableInitialState = fromJS(initialState);
    const reducers = combineReducers({
        step,
        result
    });

    const store = createStore(reducers, immutableInitialState);

    const wrapper = mount(
        <Provider store={store}>
            <_NumericTextBox/>
        </Provider>);
    return {
        immutableInitialState,
        initialState,
        wrapper
    };
    //---------------------------------------------------
}

describe('NumericTextBox component should', () => {
    test('render it\'s child component', () => {
        //Arrange
        const {wrapper} = shallowSetup();

        //Act & Assert
        expect(wrapper
            .find('StepInput')
            .exists())
            .toBe(true);
        expect(wrapper
            .find('ResultChange')
            .exists())
            .toBe(true);
    });
    test('have the same params as passed by parent', () => {
        //Arrange
        const {wrapper, props} = setup();

        //Act
        const wrapperProps = wrapper.props();

        //Assert
        expect(wrapperProps).toEqual(props);
    });
});
describe('NumericTextBox container should', () => {
    test('Should map initialState to props correctly', () => {
        //Arrange
        const {wrapper, initialState} = wrappedSetup();

        //Act
        const wrapperProps = wrapper.find('NumericTextBox').props();

        //Assert
        expect(wrapperProps).toMatchObject(initialState);
    });
    test('mapStateToProps should return correct props', () => {
        //Arrange
        const {immutableInitialState} = wrappedSetup();

        //Act
        const wrapperProps = mapStateToProps(immutableInitialState);

        //Assert
        expect(wrapperProps.step).toEqual(immutableInitialState.get('step'));
        expect(wrapperProps.result).toEqual(immutableInitialState.get('result'));
    });
});
