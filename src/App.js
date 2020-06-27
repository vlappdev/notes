import React, { useEffect, useState } from "react"
import data from "./data.js"

import NotesTable from "./components/NotesTable"
import AddNoteModal from "./components/AddNoteModal"
import FilterByTitle from "./components/FilterByTitle"

function App() {

  const [notes, setNotes] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    setFilteredNotes(
      notes.filter(( note ) => {
        return note.title.slice(0, search.length) === search
      })
    )
  }, [search, notes]);

  const getInputValue =  (inputValue) => {
    setSearch(inputValue)
  };

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
    const reverseParam = reverse ? -1: 1;
    setReverse(!reverse);

    setNotes(prevNotes => {
      return [...prevNotes].sort((a, b) => {
        return reverseParam * (new Date(...a.date.split("/")) - new Date(...b.date.split("/")))
      });
    })
  };

  return (
    <>
      <h3 className="text-center">Notes App</h3>
      <FilterByTitle notes = { notes } getInputValue = { getInputValue }/>
      <NotesTable filteredNotes={ filteredNotes } deleteNote={ deleteNote } sortByDate = { sortByDate }/>
      <button onClick={() => {setShowModal(true)}} className="btn btn-primary">New note</button>
      { showModal && (
        <AddNoteModal onCloseRequest={() => setShowModal(false)} addNewNoteToState={ addNewNoteToState }/>
      )}
    </>
  );
}

export default App;
