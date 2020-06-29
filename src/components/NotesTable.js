import React, {useEffect, useState} from 'react';
import Note from "./Note"
import { CONSTANTS }from '../Constants'

function NotesTable({ filteredNotes, deleteNote, sortByDate, reverse }) {

  const[ activeArrow, setActiveArrow ] = useState("");

  const allNotes = filteredNotes.map(( note, index ) => {
    return <Note note = { note }
                 key={ index }
                 index={ index }
                 deleteNote={ deleteNote }/>
  });

  useEffect(() => {
    !(activeArrow ==="" && reverse === false) &&
    setActiveArrow( reverse ?
                    CONSTANTS.ARROW_UP :
                    CONSTANTS.ARROW_DOWN
    )
  },[reverse, activeArrow]);

  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th scope="col">
          <span className="d-flex justify-content-between">
            Date
            <span onClick={() => sortByDate()}
                  className={`sort-by ${activeArrow}`}>
            </span>
          </span>
        </th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Author</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      { allNotes.length ? allNotes :
        <tr>
          <td className="no-results text-center align-middle"
                colSpan={12}>
                { CONSTANTS.NO_RESULTS }
          </td>
        </tr>
      }
      </tbody>
    </table>
  );
}

export default NotesTable;
