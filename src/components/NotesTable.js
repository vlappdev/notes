import React from 'react';
import Note from "./Note"

function NotesTable({notes, deleteNote, sortByDate}) {

  const allNotes = notes.map((note, index) => {
    return <Note note = { note }
                 key={ index }
                 index={ index }
                 deleteNote={ deleteNote }/>
  });

  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th scope="col">
          <span className="d-flex justify-content-between">
            Date
            <span onClick={() => sortByDate()} className="sort-by"></span>
          </span>
        </th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
        <th scope="col">Author</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
        { allNotes }
      </tbody>
    </table>
  );
}

export default NotesTable;
