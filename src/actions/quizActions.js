import { createAction } from 'redux-actions';
import { 
	CHANGE_QUIZ,
	SELECT_OPTION,
	GO_TO,
	CHANGE_MODE
} from '../constants/actionTypes';

export const changeQuiz = createAction(CHANGE_QUIZ);
export const selectOption = createAction(SELECT_OPTION);
export const goTo = createAction(GO_TO);
export const changeMode = createAction(CHANGE_MODE);
