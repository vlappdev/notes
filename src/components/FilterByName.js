import React from 'react';

function FilterByName({ notes, getInputValue }) {

  const handleChange = (e) => {
    const { value } = e.target;
    getInputValue(value)
  };

  return (
    <div className="form-group row">
      <label htmlFor="inputFilter" className="col-sm-2 col-form-label">Filter by title</label>
      <div className="col-sm-2">
        <input type="text" onChange={ handleChange } value={ notes.title } name="title" className="form-control" id="inputFilter" />
      </div>
    </div>
  );
}

export default FilterByName;
