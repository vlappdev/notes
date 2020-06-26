import React, { useState } from 'react';

function AddNoteModal({ onCloseRequest, addNewNoteToState }) {

  const dateObj = new Date();
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  const date = day + "/" + month + "/" + year;

  const [newNote, setNewNote] = useState({
    date: date,
    title:"",
    body:"",
    author:"",
    status:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewNoteToState(newNote)
    onCloseRequest()
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewNote({
      ...newNote, [name]: value
    })
  };

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Note</h5>
            <button onClick={()=> onCloseRequest()} type="button" className="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body pb-0 px-0">
            <form onSubmit={ handleSubmit }>
              <div className="form-group px-3">
                <label htmlFor="title" className="col-form-label">Title:</label>
                <input onChange={ handleChange } type="text" value={ newNote.title } className="form-control" name="title" id="title" />
              </div>
              <div className="form-group px-3">
                <label htmlFor="author" className="col-form-label">Author name:</label>
                <input onChange={ handleChange } type="text" value={ newNote.author } className="form-control" name="author" id="author" />
              </div>
              <div className="form-group px-3">
                <label htmlFor="message-text" className="col-form-label">Note:</label>
                <textarea onChange={ handleChange } value={ newNote.body} className="form-control" name="body" id="message-text">
                </textarea>
              </div>
              <div className="modal-footer mt-5">
                <button onClick={()=> onCloseRequest()} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Add Note</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNoteModal;
