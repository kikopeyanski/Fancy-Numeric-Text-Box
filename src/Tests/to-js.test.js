import React, {Component} from 'react';
import {toJS} from '../utils/to-js';
import {mount} from 'enzyme';
import {fromJS} from 'immutable';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import {mapStateToProps} from '../Containers/NumericTextBox';
import reducers from  '../reducers';

function setup() {
    const reducers = jest.fn();
    const initialState = {
        step: 1,
        result: 0
    };
    class DummyComponent extends Component {
        render() {
            return (<div>I definitely love unit testing!</div>);
        }
    }

    return {
        reducers,
        initialState,
        DummyComponent
    };
}

//Because of the magic of "connect()", the whole process should be reproduced with
// corresponding reducers and mapStateToProps functions, since they're pure functions
// i didn't mocked/stubbed them, so the result is ugly...but it works...but it's ugly
describe('toJS utility should ', () => {
    test('return object with correct props', () => {
        //Arrange
        const {initialState, DummyComponent} = setup();
        const immutableInitialState = fromJS(initialState);

        //Act
        const store = createStore(reducers, immutableInitialState);
        const JSedComponent = connect(mapStateToProps)(toJS(DummyComponent));
        const wrapper = mount(
            <Provider store={store}>
                <JSedComponent {...immutableInitialState}/>
            </Provider>);
        const childComponentProps = wrapper.find('DummyComponent').props();

        //Assert
        expect(childComponentProps).toMatchObject(initialState);
    });
});