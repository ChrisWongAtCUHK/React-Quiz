import React from 'react';
import classNames from 'classnames';
import FilteredQuestion from './FilteredQuestion';
import Answer from './Answer';
import ResultQuestion from './ResultQuestion';

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
						<Answer key={index} questions={questions} index={index}/>
					))
				}
			</div>
			<div className={classNames('result', {'react-hide': mode !== 'result'})}>
		        <h2>Quiz Result</h2>
		        {
		        	questions.map((question, index) => (
						<ResultQuestion key={index} questions={questions} index={index} question={question}/>
					))
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
