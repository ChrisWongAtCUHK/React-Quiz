import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

import { defaultConfig, QuizState } from '../../constants/model';
import { extend, shuffle, watch } from '../../constants/helperService';

/*
 * Handle all actions
 * */

const quizReducers = handleActions({
	LOAD_QUIZ: (state, { payload }) => {
		if(!state.get("loading")){
			return state;
		}
		let config = extend({}, defaultConfig, payload.config);
		let questions = config.shuffleQuestions ? shuffle(payload.questions) : payload.questions;
		let itemsPerPage =  config.pageSize;
		let currentPage = 1;
		let filteredQuestions = watch(questions, currentPage, itemsPerPage);
		return state.set("quiz", fromJS(payload.quiz))
											.set("config", fromJS(config))
											.set("questions", fromJS(questions))
											.set("totalItems", questions.length)
											.set("itemsPerPage", itemsPerPage)
											.set("currentPage", currentPage)
											.set("filteredQuestions", fromJS(filteredQuestions))
											.set("loading", false)
	},
	CHANGE_QUIZ: (state, { payload }) => {
		return state.set("quizName", payload).set("loading", true);
	},
	SELECT_OPTION: (state, { payload }) => {
		// store the selected options
		let questions = state.get('questions').toJS();
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
									.set('questions', fromJS(questions));
		}
		let filteredQuestions = watch(questions, currentPage, itemsPerPage);
		return state.set('filteredQuestions', fromJS(filteredQuestions))
					.set('questions', fromJS(questions));
	},
	// navigate to page
	GO_TO: (state, { payload }) => {
		if (payload > 0 && payload <= state.get('totalItems')) {
			let questions = state.get('questions').toJS();
			let itemsPerPage = state.get('itemsPerPage');
			let filteredQuestions = watch(questions, payload, itemsPerPage);
			return state.set('filteredQuestions', fromJS(filteredQuestions))
						.set('currentPage', payload)
						.set('mode', 'quiz');
		}
		return state;
	},
	CHANGE_MODE: (state, { payload }) => {
		return state.set('mode', payload);
	},
	SUBMIT: (state, { payload }) => {
		return state.set('mode', 'result');
	}
}, QuizState);

export default quizReducers
