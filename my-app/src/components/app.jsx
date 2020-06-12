import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import CreateArea from "./CreateArea";



function App() {

    const [notes, setNotes] = useState([])

    function addItem(newNote) {
      setNotes(prevNotes => {
          return [...prevNotes, newNote];
      });
 
    }

    function deleteItem(id){
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            });
        });
    }

return (
    <div>
        <Header />
        <CreateArea
        onAdd={addItem}
        />
        {notes.map((noteItem, index) => {
        return ( 
        <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onChecked={deleteItem}
        />
        );
        })}
        <Footer />
    </div>
);
}

export default App;

