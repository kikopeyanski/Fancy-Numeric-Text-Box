/* eslint-disable no-console */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NumericTextBox from './Containers/NumericTextBox';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {fromJS} from 'immutable';
import Limiter from './Containers/Limiter';

const initialState = {
    step: 1,
    result: 0,
    limiter: {
        active: false,
        min: 0,
        max: 3267
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
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to Fancy Numeric Text Box</h2>
                    </div>
                    <NumericTextBox/>
                    <Limiter/>
                </div>
            </Provider>
        );
    }
}

export default App;
