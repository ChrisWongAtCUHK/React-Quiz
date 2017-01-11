import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { defaultConfig, QuizState } from '../../constants/model';
import { extend, shuffle } from '../../constants/helperService';

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
		let config = extend({}, defaultConfig, payload.config);
		let questions = config.shuffleQuestions ? shuffle(payload.questions) : payload.questions;
		let itemsPerPage =  config.pageSize;
		let currentPage = 1;
		let begin = ((currentPage - 1) * itemsPerPage),
			  end = begin + itemsPerPage;

    let filteredQuestions = questions.slice(begin, end);
		let retState = state.set("quiz", fromJS(payload.quiz))
												.set("config", fromJS(config))
												.set("questions", questions)
												.set("totalItems", questions.length)
												.set("itemsPerPage", itemsPerPage)
												.set("currentPage", currentPage)
												.set("mode", quiz)
												.set("filteredQuestions", fromJS(filteredQuestions));

		return retState;								
	},
	SELECT_OPTION: (state, { payload }) => {
		return state;							 
	},
	CHANGE_MODE: (state, { payload }) => {
		return state.get("filteredQuestions");
	}
}, QuizState);

export default quizReducers
