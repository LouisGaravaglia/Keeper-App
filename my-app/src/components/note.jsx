import React from "react";
import ReactDOM from "react-dom";


function Note(props) {
return (
    <div 
     className="note"
    onClick={() => {
        props.onChecked(props.id);
    }}
    >

    <h1>{props.title}</h1>
    <p> {props.content} </p>
    </div>

)
}

export default Note;