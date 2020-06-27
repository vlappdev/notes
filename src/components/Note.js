import React, { useState } from 'react';
import { constants } from "../constants"

function Note({ note, deleteNote, index }) {

  const [status, setStatus] = useState(() => {
    const initStatus = constants.PUBLISHED;
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
      <td className="align-middle">{ note.date }</td>
      <td className="align-middle">{ note.title }</td>
      <td className="align-middle">{ note.body }</td>
      <td className="align-middle">{ note.author }</td>
      <td className="align-middle">{ status }</td>
      <td className="align-middle">
        <button onClick={ () => deleteNote(index) } className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}

export default Note;
