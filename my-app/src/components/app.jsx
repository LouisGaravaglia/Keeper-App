import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import notes from "../notes";
import CreateArea from "./CreateArea";


function App() {

    function addItem() {
        return (

        )
    }

    function deleteItem(){
        return (

        )
    }
    
return (
    <div>
        <Header />
        <CreateArea />
        {notes.map(note =>
        <Note
        key={note.key}
        title={note.title}
        content={note.content}
        />
        )}
        <Footer />
    </div>
)
}

export default App;

