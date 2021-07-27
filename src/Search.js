import React from "react";

const Search = ({onChange, editClick}) => {
  return (
    <header className="row">
      <div className="col s3">
        <button className="btn-floating btn-large waves-effect waves-light red"
          onClick={editClick}>
          <i className="material-icons">add</i>
        </button>
        <button className="waves-effect waves-light btn-small">
          <i className="material-icons right">email</i>Inbox
        </button>
        <button className="waves-effect waves-light btn-small">
          <i className="material-icons right">send</i>Sent
        </button>
      </div>
      <form>
        <input 
          type="search" 
          className="col s6" 
          placeholder="Search by keyword..."
          id="searchText"
          onChange={onChange}>
        </input>
      </form>
    </header>
  );
}

export default Search;