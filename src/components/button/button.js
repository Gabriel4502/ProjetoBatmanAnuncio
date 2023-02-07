import React from "react";
import "./styles.css"

function Button ({nome,onClick}){
    return(
        <div className="containerButton">
            <button onClick={onClick} className= "button" >{nome}</button>
        </div>
    )
}

export default Button