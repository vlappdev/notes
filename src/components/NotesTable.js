import React from 'react';
import Note from "./Note"

function NotesTable({ notes }) {

  const allNotes = notes.map((note, index) => {
    return <Note note = { note } key={ index } />
  });


  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
        <th scope="col">Author</th>
        <th scope="col">Status</th>
      </tr>
      </thead>
      <tbody>
        {allNotes}
      </tbody>
    </table>
  );
}

export default NotesTable;
