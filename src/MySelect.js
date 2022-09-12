import React from "react";
import './App.css';

const MySelect = ({startValue, options, changeSelect, value}) => {
    return(
        <div className="select-form">
            <select className="select" value={value} onChange ={(event) => changeSelect(event.target.value)}>
                <option disabled value="">{startValue}</option>
                {options.map(option => 
                    
                    <option value={option.value} key={option.value}>{option.name}</option>
                   
                )}
            </select>
        </div>

    );


}



export default MySelect; 