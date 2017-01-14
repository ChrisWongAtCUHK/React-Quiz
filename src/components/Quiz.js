import React from 'react';

const Quiz = ({
	onLoadQuiz,
	onChangeQuizName,
	onSelectOption,
	onGoTo,
	onChangeMode,
	mode,
	config,
	quiz,
	quizName,
	currentPage,
	totalItems,
	questions,
	filteredQuestions
}) => {
	const show = (tf, displayStyle) => {
		if(tf === true)
			return {display: displayStyle};
			
		return {display: "none"};
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
				<div style={show(mode === 'quiz', 'block')}>
					{
						filteredQuestions.map((question, index) => (
							<div key={index}>
								<div className="label label-warning">Question {currentPage} of {totalItems}.</div>
								<div className="row">
									<div className="col-md-12">
										<h2>{currentPage}. <span>{question.get('Name')}</span></h2>
									</div>
								</div>
								<div className="row text-left options">
								{
									question.get('Options').map((option, subIndex) => (
										<div key={subIndex} className="col-md-6">
											<div className="option">
												<label htmlFor={option.get('Id')}>
													<input id={option.get('Id')} type="checkbox" checked={option.get('Selected') === true} onChange={onSelectOption(question, option)}/>
													{option.get('Name')}
												</label>
											</div>	
										</div>
									)).toJS()
								}
								</div>
							</div>
						)).toJS()
					}
				</div>
				<hr />
				<div className="quizNav">
					<div>
						<button className="btn btn-default" style={show(config.get('allowBack'), 'inline-block')} onClick={onGoTo(1)}>First</button>{" "}
						<button className="btn btn-default" style={show(config.get('allowBack'), 'inline-block')} onClick={onGoTo(currentPage - 1)}>Prev</button>{" "}
						<button className="btn btn-primary" onClick={onGoTo(currentPage + 1)}>Next</button>{ " " }
						<button className="btn btn-default" style={show(config.get('allowBack'), 'inline-block')} onClick={onGoTo(totalItems)}>Last</button>{" "}
					</div>
					<br />
				</div>
			</div>
			<hr />
			<div className="row review" style={show(mode === 'review', 'block')}>
			{/*
				<div className="col-sm-4" ng-repeat="question in questions">
				<div ng-click="goTo($index + 1)" className="{{ isAnswered($index) == 'Answered'? 'answered': 'not-answered' }}">{{$index + 1}}. {{ isAnswered($index) }}</div>
				</div>
				*/}
			</div>
			<div className="" style={show(mode !== 'result', 'block')}>
				<button className="btn btn-default" onClick={onChangeMode('quiz')}>Quiz</button>{" "} 
				<button className="btn btn-default" onClick={onChangeMode('review')}>Review</button>{" " }
				<button className="btn btn-default">Submit Quiz</button>
			</div>
		</div>
	);
};

export default Quiz;
