import { combineReducers } from 'redux';
import {step} from './numeric-text-box-reducer';

const reducers = {step};
const combined = combineReducers(reducers);

export default combined;
