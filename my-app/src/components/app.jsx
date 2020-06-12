import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import CreateArea from "./CreateArea";



function App() {

    const [items, setItems] = useState([])

    function addItem() {
      setItems(prevItems => {
          return [...prevItems, item];
      });
      setItems("");
    }

    function deleteItem(id){
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
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
        {items.map((item, index) =>
        <Note
        key={index}
        id={index}
        title={note.heading}
        content={note.body}
        onChecked={deleteItem}
        />
        )}
        <Footer />
    </div>
)
}

export default App;

