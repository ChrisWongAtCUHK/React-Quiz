export const shuffle = function(array) {
	let currentIndex = array.length, temp, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temp = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temp;
	}
	return array;
};

export const extend = function(out) {
	out = out || {};

	for(let i = 1; i < arguments.length; i++) {
		if(!arguments[i])
			continue;

		for(let key in arguments[i]) {
			if(arguments[i].hasOwnProperty(key))
				out[key] = arguments[i][key];
		}
	}
	return out;
};
