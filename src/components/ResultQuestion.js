import React from 'react';
import classNames from 'classnames';
import CheckBox from './CheckBox';

const ResultQuestion = ({
    questions,
    index,
    question
}) => {
    /*
	 * Determine if a question is answered correctly
	 */
    const isCorrect = (index) => {
        let result = 'wrong';
        questions.toJS()[index].Options.forEach(function (option, index, array) {
            if (option.Selected === true && option.IsAnswer === true) {
                result = 'correct';
                return false;
            }
        });
        return result;
    };

    return (
        <div className="result-question">
            <h4>{index + 1}. {question.get('Name')}</h4>
            <div className="row">
            {
                question.get('Options').map((option, subIndex) => (
                    <CheckBox key={subIndex} option={option} />
                ))
            }
            </div>
            <h4 className={classNames('alert', isCorrect(index) === 'correct'? 'alert-success': 'alert-danger')}>Your answer is {isCorrect(index)}.</h4>
        </div>
    );
};

export default ResultQuestion;