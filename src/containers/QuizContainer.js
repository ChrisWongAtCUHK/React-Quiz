import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import { 
	changeQuiz, 
	selectOption,
	changeMode 
} from '../actions';
import { loadQuiz } from '../constants/quizCtrl';

export default connect(
	(state) => ({
		quizName: state.getIn(['quizReducers', 'quizName']),
		quiz: state.getIn(['quizReducers', 'quiz']),
		currentPage: state.getIn(['quizReducers', 'currentPage']),
		totalItems: state.getIn(['quizReducers', 'totalItems']),
		questions: state.getIn(['quizReducers', 'questions']),
		filteredQuestions: state.getIn(['quizReducers', 'filteredQuestions'])
	}),	
	(dispatch) => ({
		onLoadQuiz: (quizName) => {
			loadQuiz(quizName, function(data){
				dispatch(changeQuiz(data));									
			});
		},
	  onSelectOption: (question, option) => () => {
			dispatch(selectOption({question: question.toJS(), option: option.toJS()}));								
		},
		onChangeQuizName: (event) => {
			loadQuiz(event.target.value, function(data){
				dispatch(changeQuiz(data));									
			});									
		},
		onChangeMode: (quizMode) => () => {
			dispatch(changeMode(quizMode));							
		}
	})		
)(Quiz);
