import { createAction } from 'redux-actions';
import { 
	LOAD_QUIZ,
	CHANGE_QUIZ,
	SELECT_OPTION,
	GO_TO,
	CHANGE_MODE,
	SUBMIT
} from '../constants/actionTypes';

export const loadQuiz = createAction(LOAD_QUIZ);
export const changeQuiz = createAction(CHANGE_QUIZ);
export const selectOption = createAction(SELECT_OPTION);
export const goTo = createAction(GO_TO);
export const changeMode = createAction(CHANGE_MODE);
export const submit = createAction(SUBMIT);