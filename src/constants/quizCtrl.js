import axios from 'axios';

export const loadQuiz = (file, quiz) => {
	// http get to the file
	axios.get(file)
			 .then(res => {
					quiz.set('quiz', res.data);
			 });
	return quiz;
}
