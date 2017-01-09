import Immutable from 'immutable';


export const defaultConfig = {
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

export const QuizState = Immutable.fromJS({
	quizName: "data/csharp.js",
	quiz: {
		Id: 0,
		name: "",
		description: ""
	},
	config: defaultConfig,
	filteredQuestions: [],
	question: {}
});
