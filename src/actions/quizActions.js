import { createAction } from 'redux-actions';
import { 
	CHANGE_QUIZ,
	CHANGE_MODE
} from '../constants/actionTypes';

export const changeQuiz = createAction(CHANGE_QUIZ);
export const changeMode = createAction(CHANGE_MODE);
