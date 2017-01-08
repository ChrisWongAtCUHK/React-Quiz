import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { QuizState } from '../../constants/model';
import { extend } from '../../constants/helperService';

/*
 * Handle all actions
 * */
const quizReducers = handleActions({
	CHANGE_QUIZ: (state, { payload }) => {
		let quiz = state.get("quiz");
		if(quiz.get("Id") === payload.quiz.Id){
			// do nothing with the same quiz
			return state;
		}
		let config = state.get("config");
		let retState = state.set("quiz", fromJS(payload.quiz))
												.set("config", extend({}, config.toJS(), payload.config));

		return retState;								
	},
	CHANGE_MODE: (state, { payload }) => {
		return state.get("filteredQuestions");
	}
}, QuizState);

export default quizReducers
