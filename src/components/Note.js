import React from 'react';

function Note({ note }) {

  return (
    <tr>
      <td>{ note.date }</td>
      <td>{ note.title }</td>
      <td>{ note.body }</td>
      <td>{ note.author }</td>
      <td>{ note.status }</td>
    </tr>
  );
}

export default Note;
