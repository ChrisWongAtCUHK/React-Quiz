import React from 'react';
import classNames from 'classnames';
import FilteredQuestion from './FilteredQuestion';

const Quiz = ({
	onLoadQuiz,
	onChangeQuizName,
	onSelectOption,
	onGoTo,
	onChangeMode,
	onSubmitHandler,
	mode,
	config,
	quiz,
	quizName,
	currentPage,
	totalItems,
	questions,
	filteredQuestions
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
		<div className="container" onLoad={onLoadQuiz(quizName)}>
			<div className="header">
				<div className="row">
					<div className="col-md-8">
						<h3>Quiz Application</h3>
					</div>
					<div className="col-md-4 header-right">
						Select Quiz:
						<select id="quizList" value={quizName} onChange={onChangeQuizName}>
							<option value="data/aspnet.js">Asp.Net</option>
							<option value="data/csharp.js">C Sharp</option>
							<option value="data/designPatterns.js">Design Patterns</option>
						</select>
					</div>
				</div>
				<hr/>
			</div>
			<div id="quiz">
				<div className="row">
					<div className="col-md-12"><h1 className="center">{quiz.get('name')}</h1><hr /></div>
				</div>
				<div className={classNames({'react-hide': mode !== 'quiz'})}>
					{
						filteredQuestions.map((question, index) => (
							<FilteredQuestion key={index} currentPage={currentPage} totalItems={totalItems} question={question} 
								name={question.get('Name')} options={question.get('Options')} onSelectOption={onSelectOption}/>
						))
					}
					<hr />
					<div className="quizNav">
						<div>
							<button className={classNames('btn', 'btn-default', {'react-hide': !config.get('allowBack')})} onClick={onGoTo(1)}>First</button>{" "}
							<button className={classNames('btn', 'btn-default', {'react-hide': !config.get('allowBack')})} onClick={onGoTo(currentPage - 1)}>Prev</button>{" "}
							<button className="btn btn-primary" onClick={onGoTo(currentPage + 1)}>Next</button>{ " " }
							<button className={classNames('btn', 'btn-default', {'react-hide': !config.get('allowBack')})} onClick={onGoTo(totalItems)}>Last</button>{" "}
						</div>
						<br />
					</div>
				</div>
			</div>
			<div className={classNames('row', 'review', {'react-hide': mode !== 'review'})}>
				{
					questions.map((question, index) => (
						<div className="col-sm-4" key={index}>
							<div className={ isAnswered(index) === 'Answered'? 'answered': 'not-answered' }>{index + 1}. {isAnswered(index)}</div>
						</div>
					)).toJS()
				}
			</div>
			<div className={classNames('result', {'react-hide': mode !== 'result'})}>
		        <h2>Quiz Result</h2>
		        {
		        	questions.map((question, index) => (
						<div key={index}>
							<div className="result-question">
								<h4>{index + 1}. {question.get('Name')}</h4>
		                		<div className="row">
		                		{
									question.get('Options').map((option, subIndex) => (
										<div key={subIndex} className="col-md-6">
											<input id={option.get('Id')} type="checkbox" disabled="disabled" checked={option.get('Selected') === true}/>
		                            			{option.get('Name')}
										</div>
									)).toJS()
								}
		                		</div>
		                		<h4 className={classNames('alert', isCorrect(index) === 'correct'? 'alert-success': 'alert-danger')}>Your answer is {isCorrect(index)}.</h4>
							</div>
						</div>
					)).toJS()
		        }
		        <h4 className="alert alert-info text-center">You may close this window now.</h4>
		    </div>
			<hr />
			<div className={classNames({'react-hide': mode === 'result'})}>
				<button className="btn btn-default" onClick={onChangeMode('quiz')}>Quiz</button>{" "} 
				<button className="btn btn-default" onClick={onChangeMode('review')}>Review</button>{" " }
				<button className="btn btn-default" onClick={onSubmitHandler('result')}>Submit Quiz</button>
			</div>
		</div>
	);
};

export default Quiz;
