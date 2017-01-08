import { handleActions } from 'redux-actions';
import { QuizState } from '../../constants/model';
import { loadQuiz } from '../../constants/quizCtrl';

/*
 * Handle all actions
 * */
const quizReducers = handleActions({
	CHANGE_QUIZNAME: (state, { payload }) => {
		loadQuiz(payload);
		return state.set('quizName', payload);								
	},
	CHANGE_MODE: (state, { payload }) => {
		return state.get('filteredQuestions');
	}
}, QuizState);

export default quizReducers
