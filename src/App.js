import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NumericTextBox from "./Containers/NumericTextBox";
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

const initialState = {step: 1, result: 0};

const store = createStore(reducers, initialState);

let unsubscribe = store.subscribe(() => {
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
                </div>
            </Provider>
        );
    }
}

export default App;
