import axios from 'axios';

export const getQuizFromFile = (file, callback) => {
	// http get to the file
	axios.get(file)
			 .then(res => {
					callback(res.data);
			 });
}
