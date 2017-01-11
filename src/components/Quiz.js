import React from 'react';

const Quiz = ({
	onLoadQuiz,
	onChangeQuizName,
	onSelectOption,
	quiz,
	quizName,
	currentPage,
	totalItems,
	questions,
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
					<div className={debug()}>
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
														<input id={option.get('Id')} type="checkbox" checked={false} onChange={onSelectOption(question, option)}/>
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
				</div>
		</div>
	);
};

export default Quiz;
