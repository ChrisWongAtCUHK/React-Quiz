import React from 'react';

const CheckBox = ({
    option
}) => {
    return (
        // show correct answer if wrong
        <div className={"col-md-6" + (!option.get('Selected') && option.get('IsAnswer') ? " alert-success" : "")}>
            <input id={option.get('Id')} type="checkbox" disabled="disabled" checked={option.get('Selected') === true}/>
                {option.get('Name')}
        </div>
    );
};

export default CheckBox;