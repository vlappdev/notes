import React, { useEffect, useState } from "react"

import NotesTable from "./components/NotesTable"
import AddNoteModal from "./components/AddNoteModal"
import FilterByTitle from "./components/FilterByTitle"
import { CONSTANTS } from "./Constants"

function App() {

  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/vlappdev/notes/master/src/notes.json")
      .then(res => {
        return res.json()
      })
      .then( data => {
        setNotes(data);
      });
  },[]);

  const getInputValue = (inputValue) => {
    setInputValue(inputValue)
  };

  const addNewNoteToState = (newNote) => {
    setNotes([...notes, newNote])
  };

  const deleteNote = (index)=>{
    const newStateOfNotes = notes.filter((note)=>{
      return notes.indexOf(note) !== index
    });

    window.confirm( CONSTANTS.DELETE_MESSAGE);
    setNotes(newStateOfNotes);
  };

  const sortByDate = () => {
    const reverseParam = reverse ? -1: 1;
    setReverse(!reverse);

    setNotes(prevNotes => {
      return [...prevNotes].sort((a, b) => {
        return reverseParam * (new Date(a.date) - new Date(b.date))
      });
    })
  };

  return (
    <div className="container">
      <h3 className="text-center mt-5">Notes App</h3>

      <FilterByTitle notes = { notes }
                     getInputValue = { getInputValue }
      />
      <NotesTable notes={ notes }
                  deleteNote={ deleteNote }
                  sortByDate = { sortByDate }
                  reverse ={ reverse }
                  inputValue = { inputValue }
      />
      { showModal && (
        <AddNoteModal onCloseRequest={() => setShowModal(false)}
                      addNewNoteToState={ addNewNoteToState }
        />
      )}

      <button onClick={() => {setShowModal(true)}}
              className="btn btn-primary">
              New note
      </button>
    </div>
  );
}

export default App;
