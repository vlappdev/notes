import React, { useState } from "react"
import data from "./data.js"

import NotesTable from "./components/NotesTable"
import AddNoteModal from "./components/AddNoteModal"

function App() {

  const [notes, setNotes] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const addNewNoteToState = (newNote) => {
    setNotes([...notes, newNote])
  };

  const deleteNote = (index)=>{
    const newStateOfNotes = notes.filter((note)=>{
      return notes.indexOf(note) !== index
    });

    setNotes(newStateOfNotes);
  };

  const sortByDate = () => {
    setNotes(prevNotes => {
      const sortedNotes = prevNotes.sort((a,b)=>{
        return new Date(...a.date.split("/")) - new Date(...b.date.split("/"))
      });

      return prevNotes.splice(0, prevNotes.length, ...sortedNotes);
    })
  };

  return (
    <>
      <h3 className="text-center">Notes App</h3>
      <NotesTable notes={ notes } deleteNote={ deleteNote } sortByDate = { sortByDate }/>
      <button onClick={() => {setShowModal(true)}} className="btn btn-primary">New note</button>
      { showModal && (
        <AddNoteModal onCloseRequest={() => setShowModal(false)} addNewNoteToState={ addNewNoteToState }/>
      )}
    </>
  );
}

export default App;
