import React from 'react';

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
                // options.map((option, subIndex) => (
                    // console.log(subIndex)
                    // <div key={subIndex} className="col-md-6">
                    //     <div className="option">
                    //         <label htmlFor={option.get('Id')}>
                    //             <input id={option.get('Id')} type="checkbox" checked={option.get('Selected') === true} onChange={onSelectOption(question, option)}/>
                    //             {option.get('Name')}
                    //         </label>
                    //     </div>	
                    // </div>
                // )).toJS()
                // ))
            }
            </div>
        </>
    );
}

export default filteredQuestion;