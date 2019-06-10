import React from 'react';

const CheckBox = ({
    option
}) => {
    return (
        <div className="col-md-6">
            <input id={option.get('Id')} type="checkbox" disabled="disabled" checked={option.get('Selected') === true}/>
                {option.get('Name')}
        </div>
    );
};

export default CheckBox;