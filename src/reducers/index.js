import { combineReducers } from 'redux-immutable';
import quizReducers from './data/quizReducers';

const rootReducer = combineReducers({quizReducers});

export default rootReducer;
