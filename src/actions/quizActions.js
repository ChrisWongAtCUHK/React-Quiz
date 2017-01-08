import { createAction } from 'redux-actions';
import { 
	CHANGE_QUIZNAME,
	CHANGE_MODE
} from '../constants/actionTypes';

export const changeQuizName = createAction(CHANGE_QUIZNAME);
export const changeMode = createAction(CHANGE_MODE);
