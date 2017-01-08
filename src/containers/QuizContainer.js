import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import { 
	changeQuizName, 
	changeMode 
} from '../actions';

export default connect(
	(state) => ({
		quizName: state.getIn(['quizReducers', 'quizName']),
		quiz: state.getIn(['quizReducers', 'quiz'])
	}),	
	(dispatch) => ({
		onLoadQuiz: (quizName) => {
			dispatch(changeQuizName(quizName));									
		},
		onChangeQuizName: (event) => {
			dispatch(changeQuizName(event.target.value));									
		},
		onChangeMode: (quizMode) => () => {
			dispatch(changeMode(quizMode));							
		}
	})		
)(Quiz);
