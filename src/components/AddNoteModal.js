import React, {useState, useRef, useEffect} from 'react';
import { CONSTANTS } from "../Constants"

function AddNoteModal({ onCloseRequest, addNewNoteToState }) {

  const [date] = useState(() => {
    const dateObj = new Date();
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return month + "/" + day + "/" + year;
  });

  const [newNote, setNewNote] = useState({
    date: date,
    title:"",
    body:"",
    author:"",
    status: CONSTANTS.PUBLISHED,
    submitted: false
  });

  useEffect(()=>{
    inputTitle.current.focus();
  }, []);

  const inputTitle = useRef();

  const setSubmitButton = (noteStatus) => {
    const status = noteStatus !== CONSTANTS.PUBLISHED ?
                    CONSTANTS.DRAFT :
                    noteStatus;

    setNewNote({
      ...newNote, status
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewNote({
      ...newNote, submitted: true
    });

    if(newNote.title && newNote.author && newNote.body) {
      addNewNoteToState(newNote);
      onCloseRequest();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewNote({
      ...newNote, [name]: value
    })
  };

  return (
    <>
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
                  <input onChange={ handleChange }
                         type="text"
                         ref={ inputTitle }
                         value={ newNote.title }
                         className={`form-control 
                                      ${ newNote.submitted && !newNote.title ?
                                       CONSTANTS.IS_INVALID :
                                       ""}`
                         }
                         name="title"
                         id="title"
                  />
                  { newNote.submitted && !newNote.title &&
                  <p className="invalid-feedback">{ CONSTANTS.TITLE_ERROR_MESSAGE }</p>}
                </div>
                <div className="form-group px-3">
                  <label htmlFor="author" className="col-form-label">Author name:</label>
                  <input onChange={ handleChange }
                         type="text"
                         value={ newNote.author }
                         className={`form-control 
                                      ${ newNote.submitted && !newNote.author ? 
                                        CONSTANTS.IS_INVALID : 
                                        ""}`
                         }
                         name="author"
                         id="author" />
                  { newNote.submitted && !newNote.author &&
                    <p className="invalid-feedback">{ CONSTANTS.AUTHOR_ERROR_MESSAGE }</p>
                  }
                </div>
                <div className="form-group px-3">
                  <label htmlFor="message-text" className="col-form-label">Description:</label>
                  <textarea onChange={ handleChange }
                            value={ newNote.body }
                            className={`form-control 
                                          ${ newNote.submitted && !newNote.body ?
                                          CONSTANTS.IS_INVALID :
                                          ""}`
                            }
                            name="body"
                            id="message-text">
                  </textarea>
                  { newNote.submitted && !newNote.body &&
                  <p className="invalid-feedback">{ CONSTANTS.BODY_ERROR_MESSAGE }</p>
                  }
                </div>
                <div className="modal-footer mt-5">
                  <button onClick={() => onCloseRequest()} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button onClick={ () => setSubmitButton() } type="submit" className="btn btn-primary">Save as Draft</button>
                  <button onClick={ () => setSubmitButton(newNote.status) } type="submit" className="btn btn-primary">Add Note</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default AddNoteModal;
