import React from 'react';

const Quiz = ({
	onLoadQuiz,
	onChangeQuizName,
	quiz,
	quizName,
	currentPage,
	totalItems,
	filteredQuestions
}) => {
	const debug = () => {
		return {"display": "block"};
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
				</div>
				<div className={debug()}>
					{
						filteredQuestions.map((filteredQuestion, index) => (
							<div key={index}>
								<div className="label label-warning">Question {currentPage} of {totalItems}.</div>
								<div className="row">
									<div className="col-md-12">
										<h2>{currentPage}. <span>{filteredQuestion.get('Name')}</span></h2>
									</div>
								</div>
							</div>
						)).toJS()
					}
				</div>
		</div>
	);
};

export default Quiz;
