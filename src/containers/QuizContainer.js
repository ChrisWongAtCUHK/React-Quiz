import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import { 
	changeQuiz, 
	selectOption,
	goTo,
	changeMode 
} from '../actions';
import { loadQuiz } from '../constants/quizCtrl';

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
		onGoTo: (index) => () => {
			dispatch(goTo(index));			
		},
		onChangeMode: (quizMode) => () => {
			dispatch(changeMode(quizMode));							
		}
	})		
)(Quiz);
