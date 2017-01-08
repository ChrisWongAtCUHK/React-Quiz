import { handleActions } from 'redux-actions';
import { QuizState } from '../../constants/model';

const defaultConfig = {
	allowBack: true,
	allowReview: true,
	autoMove: false,  // if true, it will move to next question automatically when answered.
	duration: 0,  // indicates the time in which quiz needs to be completed. post that, quiz will be automatically submitted. 0 means unlimited.
	pageSize: 1,
	requiredAll: false,  // indicates if you must answer all the questions before submitting.
	richText: false,
	shuffleQuestions: false,
	shuffleOption: false,
	showClock: false,
	showPager: true,
	theme: "none"
};

/*
 * Handle all actions
 * */
const quizReducers = handleActions({
	CHANGE_QUIZ: (state, { payload }) => {
		let quiz = state.get('quiz');
		if(quiz.get('Id') === payload.quiz.Id){
			// do nothing with the same quiz
			return state;
		}
		let retState = state.setIn("quiz.Id".split("."), payload.quiz.Id)
												.setIn("quiz.name".split("."), payload.quiz.name);
		return retState;								
	},
	CHANGE_MODE: (state, { payload }) => {
		return state.get('filteredQuestions');
	}
}, QuizState);

export default quizReducers
