import { handleActions } from 'redux-actions';
import { QuizState } from '../../constants/model';

/*
 * Handle all actions
 * */
const quizReducers = handleActions({
	CHANGE_QUIZ: (state, { payload }) => {
		let quiz = state.set('quiz');
		if(quiz.get('Id') === payload.Id){
			// do nothing with the same quiz
			return state;
		}
		let retState = state.set('quiz', state.get('quiz')
			.set('Id', payload.Id)
			.set('name', payload.name)
		);								
		console.log(retState.get('quiz').get('Id'));
		return retState;								
	},
	CHANGE_MODE: (state, { payload }) => {
		return state.get('filteredQuestions');
	}
}, QuizState);

export default quizReducers
