import React, {useState} from "react";

function CreateArea(props) {
    const [notes, setNotes] = useState({
        title: "",
        content: ""
    })

    function changeHandler(event) {
        const {value, name} = event.target;

        setNotes(prevNote => {
            return{
                ...prevNote,
                [name]: value
            }
        });

    }

    function submitNote(event) {
        props.onAdd(notes);
        setNotes({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
   

    return (
        <div>
        <form>
            <input 
            onChange={changeHandler}
            name="title" 
            placeholder="Title" 
            value={notes.title}
            />
            <textarea 
            onChange={changeHandler}
            name="content" 
            placeholder="Take a note..." 
            rows="3" 
            value={notes.content}
            />
            <button onClick={submitNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;