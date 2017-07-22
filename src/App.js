/* eslint-disable no-console */
import React, {Component} from 'react';
import './App.css';
import NumericTextBox from './Containers/NumericTextBox';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {fromJS} from 'immutable';
import Navigation from './Components/Navigation';

const initialState = {
    step: 1,
    result: 0,
    limiter: {
        active: false,
        min: 1,
        max: 999
    }
};

const immutableInitialState = fromJS(initialState);

const store = createStore(reducers, immutableInitialState);

store.subscribe(() => {
    console.log(store.getState());
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Navigation/>
                    <NumericTextBox/>
                </div>
            </Provider>
        );
    }
}

export default App;
