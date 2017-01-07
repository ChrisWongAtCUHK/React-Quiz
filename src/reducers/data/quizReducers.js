import { handleActions } from 'redux-actions';
import { QuizState } from '../../constants/model';

/*
 * Handle all actions
 * */
const quizReducers = handleActions({
	CHANGE_MODE: (state, { payload }) => {
		return state.get('filteredQuestions');
	}
}, QuizState);

export default quizReducers
