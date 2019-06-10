import React from 'react';

const Option = ({
    option,
    question,
    onSelectOption
}) => {
    return (
        <div className="col-md-6">
            <div className="option">
                <label htmlFor={option.get('Id')}>
                    <input id={option.get('Id')} type="checkbox" checked={option.get('Selected') === true} 
                        onChange={onSelectOption(question, option)}/>
                    {option.get('Name')}
                </label>
            </div>	
        </div>
    )
}

export default Option;