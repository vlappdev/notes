import React from 'react';

function Note({ note, deleteNote, index }) {

  return (
    <tr>
      <td>{ note.date }</td>
      <td>{ note.title }</td>
      <td>{ note.body }</td>
      <td>{ note.author }</td>
      <td>{ note.status }</td>
      <td><button onClick={ () => deleteNote(index) } className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}

export default Note;
