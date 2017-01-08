import Immutable from 'immutable';

export const QuizState = Immutable.fromJS({
	quizName: "data/csharp.js",
	quiz: {
		Id: 0,
		name: "",
		description: ""
	},
	filteredQuestions: [],
	question: {}
});
