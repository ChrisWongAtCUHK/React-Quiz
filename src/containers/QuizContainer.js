import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import { changeMode } from '../actions';

export default connect(
	(state) => ({
		mode: state.getIn(['quizReducers', 'mode'])
	}),	
	(dispatch) => ({
		onChangeMode: (quizMode) => () => {
			dispatch(changeMode(quizMode));							
		}
	})		
)(Quiz);
