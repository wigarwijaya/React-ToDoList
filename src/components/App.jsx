import React, { useState } from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "../notes";
import CreateArea from "./CreateArea.jsx";

const App = () => {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) =>{
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      }
      )})
  }

  return (
      <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => {
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
        })}
        <Footer />
      </div>
    );
};

export default App;
