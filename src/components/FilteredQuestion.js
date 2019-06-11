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
    // for every 2 options, treat as a row
    const rows = [[]];
    let rowCounter = 0;
    options.forEach((option, index) =>{
        if(index % 2 === 0){
            rows[rowCounter] = [];
            rows[rowCounter].push(option);
        } else {
            rows[rowCounter++].push(option);
        }
    });
    return (
        <>
            <div className="label label-warning">Question {currentPage} of {totalItems}.</div>
            <div className="row">
                <div className="col-md-12">
                    {/* display the html for question name */}
                    <h2>{currentPage}. <span dangerouslySetInnerHTML={{__html: name}}></span></h2>
                </div>
            </div>
            <div className="row text-left options">
            {
                rows.map((row, index) => (
                    <div className="row" key={index}>
                        <Option question={question} option={row[0]} onSelectOption={onSelectOption}/>
                        {/* there are options of odd number */}
                        {row[1] === undefined ? "" : <Option question={question} option={row[1]} onSelectOption={onSelectOption}/>}
                    </div>
                ))
            }
            </div>
        </>
    );
};

export default filteredQuestion;