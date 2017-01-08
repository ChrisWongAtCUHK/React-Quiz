import axios from 'axios';

export const loadQuiz = (file) => {
	// http get to the file
	axios.get(file)
			 .then(res => {
					console.log(res.data);
			 });
}
