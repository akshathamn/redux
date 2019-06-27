import {combineReducers} from 'redux';
import Ageupdownreducers from './Ageupdownreducers';
import Task2reducers from './Task2reducers';
import Task2reducers2 from './Task2reducers2';
import Task2reducers3 from './Task2reducers3';
import Task2reducers4 from './Task2reducers4';
import Task3reducer from './Task3reducer';
import Task4reducer from './Task4reducer';

export default combineReducers({
    Ageupdownreducers,
    Task2reducers,
    Task2reducers2,
    Task2reducers3,
    Task2reducers4,
    Task3reducer,
    Task4reducer
});
