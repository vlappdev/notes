import React from 'react';

function FilterByTitle({ notes, filterByInputValue }) {

  const handleChange = (e) => {
    const { value } = e.target;
    filterByInputValue(value)
  };

  return (
    <div className="form-group">
      <label htmlFor="inputFilter" className="col-sm-2 col-form-label px-0">Filter by title</label>
      <div className="col-sm-2 pl-0">
        <input type="text" onChange={ handleChange } value={ notes.title } name="title" className="form-control" id="inputFilter" />
      </div>
    </div>
  );
}

export default FilterByTitle;
