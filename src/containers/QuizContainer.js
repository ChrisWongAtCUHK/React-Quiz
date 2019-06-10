import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import { 
	loadQuiz,
	changeQuiz, 
	selectOption,
	goTo,
	changeMode,
	submit
} from '../actions';
import { getQuizFromFile } from '../constants/quizCtrl';

export default connect(
	(state) => ({
		mode: state.getIn(['quizReducers', 'mode']),
		config: state.getIn(['quizReducers', 'config']),
		quizName: state.getIn(['quizReducers', 'quizName']),
		quiz: state.getIn(['quizReducers', 'quiz']),
		currentPage: state.getIn(['quizReducers', 'currentPage']),
		totalItems: state.getIn(['quizReducers', 'totalItems']),
		questions: state.getIn(['quizReducers', 'questions']),
		filteredQuestions: state.getIn(['quizReducers', 'filteredQuestions'])
	}),	
	(dispatch) => ({
		onLoadQuiz: (quizName) => {
			getQuizFromFile(quizName, (data) => {
				dispatch(loadQuiz(data));									
			});
		},
	  	onSelectOption: (question, option) => () => {
			dispatch(selectOption({question: question.toJS(), option: option.toJS()}));								
		},
		onChangeQuizName: (event) => {
			dispatch(changeQuiz(event.target.value));									
		},
		onGoTo: (index) => () => {
			dispatch(goTo(index));			
		},
		onChangeMode: (mode) => () => {
			dispatch(changeMode(mode));							
		},
		onSubmitHandler: (mode) => () => {
			dispatch(submit('result'));							
		}
	})		
)(Quiz);
