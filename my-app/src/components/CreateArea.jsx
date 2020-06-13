import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";


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
        <form className="create-note">
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
            <Zoom in={true}>
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;