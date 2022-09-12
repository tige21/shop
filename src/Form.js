import React from "react";
import './App.css';

function Form (props) {
    return (
        <div className="form">

            <div className="form-container">
                <input placeholder="Название" onChange = {(e) => props.onNameInput(e.target.value)}></input>
                <input placeholder="Информация" onChange = {(e) => props.onInfoInput(e.target.value)}></input>
                <input placeholder="Цена" onChange = {(e) => props.onPriceInput(e.target.value)}></input>
                <input placeholder="Ссылка на покупку" onChange = {(e) => props.onBuyInput(e.target.value)}></input>
                
                <button 
                  onClick = {props.onItemAdd}
                  className="button-add"
                  >ADD
                </button>
            </div>
        </div>

    );

}


export default Form;