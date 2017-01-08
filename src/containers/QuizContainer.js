import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import { 
	changeQuiz, 
	changeMode 
} from '../actions';
import { loadQuiz } from '../constants/quizCtrl';

export default connect(
	(state) => ({
		quizName: state.getIn(['quizReducers', 'quizName']),
		quiz: state.getIn(['quizReducers', 'quiz'])
	}),	
	(dispatch) => ({
		onLoadQuiz: (quizName) => {
			loadQuiz(quizName, function(data){
				dispatch(changeQuiz(data));									
			});
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
