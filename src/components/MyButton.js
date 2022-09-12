import React from "react";
import cl from "./MyButton.module.css"
const MyButton = ({defaultValue, onModal}) => {
    return (
    <div className={cl.btncontainer}>
        <button 
            className={cl.btn}
            onClick={onModal}>{defaultValue}
        </button>
    </div>
        
    );

}

export default MyButton;