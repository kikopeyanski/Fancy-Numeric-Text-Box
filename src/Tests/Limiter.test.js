/* eslint-disable react/jsx-pascal-case,no-undef */
import  {mount} from 'enzyme';
import React from 'react';
import _Limiter from '../Containers/Limiter';
import {Limiter, mapStateToProps} from '../Containers/Limiter';
import {fromJS} from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux-immutable';
import {limiter} from '../reducers';

function setup(predefinedProps) {
    let props;
    if (predefinedProps) {
        props = predefinedProps;
    } else {
        props = {
            min: 0,
            max: 999,
            active: true,
            changeMin: jest.fn(),
            changeMax: jest.fn(),
            changeLimiterActive: jest.fn(),
        };
    }


    const wrapper = mount(<Limiter {...props}/>);

    return {
        props,
        wrapper
    };
}
function wrappedSetup() {
    const initialState = {
        limiter: {
            min: 0,
            max: 999,
            active: false
        }
    };
    const immutableInitialState = fromJS(initialState);
    const reducers = combineReducers({limiter});
    const store = createStore(reducers, immutableInitialState);
    const wrapper = mount(
        <Provider store={store}>
            <_Limiter/>
        </Provider>);

    return {
        wrapper,
        initialState,
        immutableInitialState
    };
}

describe('Limiter component should', () => {
    test('have the same props as those passed', () => {
        //Arrange
        const {wrapper, props} = setup();

        //Act
        const wrapperProps = wrapper.props();

        //Assert
        expect(wrapperProps).toMatchObject(props);
    });
    test('render correct cases when active/not-active is passed as props', () => {
        //Arrange
        const {wrapper, props} = setup();

        //Act & Assert
        expect(props.active).toBe(true);
        expect(wrapper
            .find('button')
            .html())
            .toContain('X');
    });
    test('render correct cases when active/not-active is passed as props', () => {
        //Arrange
        const {wrapper, props} = setup({
            min: 0,
            max: 999,
            active: false,
            changeMin: jest.fn(),
            changeMax: jest.fn(),
            changeLimiterActive: jest.fn()
        });

        //Act & Assert
        expect(props.active).toBe(false);
        expect(wrapper
            .find('button')
            .html())
            .toContain('LIMITER');
    });
    test('call handleChangeMin function when change is detected', () => {
        //Arrange
        const {wrapper} = setup();
        const inputFiled = wrapper.find('input[name="min"]');
        const instance = wrapper.instance();

        //Act
        const spy = spyOn(instance, 'handleChangeMin');
        wrapper.update();
        inputFiled.simulate('change', {target: {value: 42}});

        //Assert
        expect(spy).toHaveBeenCalled();
    });
    test('call handleChangeMax function when change is detected', () => {
        //Arrange
        const {wrapper} = setup();
        const inputFiled = wrapper.find('input[name="max"]');
        const instance = wrapper.instance();

        //Act
        const spy = spyOn(instance, 'handleChangeMax');
        wrapper.update();
        inputFiled.simulate('change', {target: {value: 42}});

        //Assert
        expect(spy).toHaveBeenCalled();
    });
    test('call handleToggle function when change is detected', () => {
        //Arrange
        const {wrapper} = setup();
        const button = wrapper.find('#btn-toggle');
        const instance = wrapper.instance();

        //Act
        const spy = spyOn(instance, 'handleToggle');
        wrapper.update();
        button.simulate('click');

        //Assert
        expect(spy).toHaveBeenCalled();
    });
    test('handleChangeMin should call parent function changeMin with correct props', () => {
        //Arrange
        const {wrapper, props} = setup();
        const theAnswerToEverything = 42;

        //Act
        wrapper.instance().handleChangeMin({
            target: {
                value: theAnswerToEverything
            }
        });

        //Assert
        expect(props.changeMin).toHaveBeenCalled();
    });
    test('handleChangeMax should call parent function changeMax with correct props', () => {
        //Arrange
        const {wrapper, props} = setup();
        const theAnswerToEverything = 42;

        //Act
        wrapper.instance().handleChangeMax({
            target: {
                value: theAnswerToEverything
            }
        });

        //Assert
        expect(props.changeMax).toHaveBeenCalled();
    });
    test('handleToggle should call parent function changeLimiterActive with correct props', () => {
        //Arrange
        const {wrapper, props} = setup();

        //Act
        wrapper.instance().handleToggle();

        //Assert
        expect(props.changeLimiterActive).toHaveBeenCalled();
        expect(props.changeLimiterActive.mock.calls[0][0]).toEqual(!props.active);
    });
});
describe('Limiter container should', () => {
    test('map initialStateToProps to props correctly', () => {
        //Arrange
        const {wrapper, initialState} = wrappedSetup();

        //Act
        const wrapperProps = wrapper.find('Limiter').props();

        //Assert
        expect(wrapperProps).toMatchObject(initialState.limiter);
    });
    test('mapStatToProps should return correct props', () => {
        //Arrange
        const {immutableInitialState} = wrappedSetup();

        //Act
        const wrapperProps = mapStateToProps(immutableInitialState);

        //Assert
        expect(wrapperProps.min).toEqual(immutableInitialState.getIn(['limiter', 'min']));
        expect(wrapperProps.max).toEqual(immutableInitialState.getIn(['limiter', 'max']));
        expect(wrapperProps.active).toEqual(immutableInitialState.getIn(['limiter', 'active']));
    });
});