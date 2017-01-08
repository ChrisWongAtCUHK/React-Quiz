import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import { changeMode } from '../actions';

export default connect(
	(state) => ({
		quizName: state.getIn(['quizReducers', 'quizName'])
	}),	
	(dispatch) => ({
		onChangeMode: (quizMode) => () => {
			dispatch(changeMode(quizMode));							
		}
	})		
)(Quiz);
