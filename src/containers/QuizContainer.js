import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import { 
	changeQuizName, 
	changeMode 
} from '../actions';
import { loadQuiz } from '../constants/quizCtrl';

export default connect(
	(state) => ({
		quizName: loadQuiz(state.getIn(['quizReducers', 'quizName']))
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
