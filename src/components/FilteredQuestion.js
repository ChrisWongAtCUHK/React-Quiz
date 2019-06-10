import React from 'react';
import Option from './Option';

const filteredQuestion = ({
    currentPage,
    totalItems,
    name,
    question,
    options,
    onSelectOption
}) => {
    return (
        <>
            <div className="label label-warning">Question {currentPage} of {totalItems}.</div>
            <div className="row">
                <div className="col-md-12">
                    <h2>{currentPage}. <span>{name}</span></h2>
                </div>
            </div>
            <div className="row text-left options">
            {
                options.map((option, subIndex) => (
                    <Option key={subIndex} question={question} option={option} onSelectOption={onSelectOption}/>
                ))
            }
            </div>
        </>
    );
}

export default filteredQuestion;