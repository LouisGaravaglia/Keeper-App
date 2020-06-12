import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
      <Header />
        <ul>
          {items.map((todoItem, index) => (
            <Note
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
              title={note.title}
                content={note.content}
            />
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  );
}


export default App;

