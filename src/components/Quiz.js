import React from 'react';

const Quiz = ({
	onChangeQuizName,
	quizName
}) => (
	<div className="container">
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
					<option value="data/desighPatterns.js">Design Patterns</option>
				</select>
				</div>
			</div>
		</div>
	</div>
);

export default Quiz;
