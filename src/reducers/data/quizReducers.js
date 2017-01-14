import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { defaultConfig, QuizState } from '../../constants/model';
import { extend, shuffle, watch } from '../../constants/helperService';

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

    let filteredQuestions = watch(questions, currentPage, itemsPerPage);
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
		// store the selected options
		let questions = state.get('questions');
		let question = payload.question;
		let option = payload.option;
		for(let key in question.Options) {
			if(question.Options[key].Id === option.Id) {
				question.Options[key].Selected = true;
			} else {
				question.Options[key].Selected = false;
			}
		}
		for(let key in questions) {
			if(questions[key].Id === question.Id) {
				questions[key] = question;
				break;
			}
		}

		// move to next page, except the last page
		let config = state.get('config').toJS();
		let currentPage = state.get('currentPage');
		let totalItems = state.get('totalItems');
		let itemsPerPage = state.get('itemsPerPage');
		if (config.autoMove === true && currentPage < totalItems){
			currentPage++;

			let filteredQuestions = watch(questions, currentPage, itemsPerPage);
			return state.set('currentPage', currentPage)
									.set('filteredQuestions', fromJS(filteredQuestions))
									.set('questions', questions);
		}
		let filteredQuestions = watch(questions, currentPage, itemsPerPage);
		return state.set('filteredQuestions', fromJS(filteredQuestions))
								.set('questions', questions);
	},
	// navigate to page
	GO_TO: (state, { payload }) => {
		if (payload > 0 && payload <= state.get('totalItems')) {
			return state.set('currentPage', payload)
									.set('mode', 'quiz');
		}
		return state;
	},
	CHANGE_MODE: (state, { payload }) => {
		return state.get("filteredQuestions");
	}
}, QuizState);

export default quizReducers
