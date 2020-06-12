import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        heading: "",
        body: ""
    })

    function changeHandler(event) {
        const {value, name} = event.target;

        setNote(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        });

    }

   

    return (
        <div>
        <form>
            <input 
            onChange={changeHandler}
            name="title" 
            placeholder="Title" 
            />
            <textarea 
            onChange={changeHandler}
            name="content" 
            placeholder="Take a note..." 
            rows="3" 
            />
            <button 
            onClick={() => {
                props.onAdd(note); 
            }}
            >Add</button>
        </form>
        </div>
    );
}

export default CreateArea;