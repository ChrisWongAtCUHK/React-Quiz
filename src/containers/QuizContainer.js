import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import { 
	changeQuizName, 
	changeMode 
} from '../actions';
import { loadQuiz } from '../constants/quizCtrl';

export default connect(
	(state) => ({
		quizName: state.getIn(['quizReducers', 'quizName']),
		quiz: loadQuiz(state.getIn(['quizReducers', 'quizName']), state.getIn(['quizReducers', 'quiz']))
	}),	
	(dispatch) => ({
		onChangeQuizName: (event) => {
			dispatch(changeQuizName(event.target.value));									
		},
		onChangeMode: (quizMode) => () => {
			dispatch(changeMode(quizMode));							
		}
	})		
)(Quiz);
