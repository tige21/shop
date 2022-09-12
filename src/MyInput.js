import React from "react";
import './App.css';
import classes from './MyInput.module.css'


const MyInput = (props) => {
    return(
        <div className="container"><input className={classes.search_input} {...props}/>
            
        </div>
      
        

    );


};

export default MyInput;