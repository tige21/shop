import React from "react";
import cl from "./Loader.module.css"

const Loader = () => {
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className={cl.Loader}></div>

        </div>



    );


}

export default Loader;