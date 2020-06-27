import React, { useState } from 'react';

function Note({ note, deleteNote, index }) {

  const [status, setStatus] = useState(() => {
    const initStatus = "published";
    return  note.status === initStatus ?
            note.status :
            <button onClick={ () => setStatus(initStatus)}
              className="btn btn-primary">
              Publish
            </button>
    }
  );

  return (
    <tr>
      <td>{ note.date }</td>
      <td>{ note.title }</td>
      <td>{ note.body }</td>
      <td>{ note.author }</td>
      <td>{ status }</td>
      <td>
        <button onClick={ () => deleteNote(index) } className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}

export default Note;
