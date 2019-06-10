import React from 'react';

const Answer = ({
    questions,
    index
}) => {
    /*
	 * Determine if a question is answered
	 */
    const isAnswered = (index) => {
        let answered = 'Not Answered';
        questions.toJS()[index].Options.forEach(function (option, index, array) {
            if (option.Selected === true) {
                answered = 'Answered';
                return false;
            }
        });
        return answered;
    };
    return (
        <div className="col-sm-4">
            <div className={ isAnswered(index) === 'Answered'? 'answered': 'not-answered' }>{index + 1}. {isAnswered(index)}</div>
        </div>
    );
}
export default Answer;