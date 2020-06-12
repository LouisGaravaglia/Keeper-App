import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import CreateArea from "./CreateArea";
import notes from "../notes";


function App() {

    const [items, setItems] = useState([])

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
        <CreateArea
        onAdd={addItem}
        />
        {items.map((item, index) =>
        <Note
        key-{index}
        id={index}
        title={note.heading}
        content={note.body}
        />
        )}
        <Footer />
    </div>
)
}

export default App;

