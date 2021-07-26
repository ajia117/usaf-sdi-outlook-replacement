import React from "react";

const Search = ({onChange, onClick}) => {
  return (
    <header class="row">
      <div class="col s3">
        <button class="btn-floating btn-large waves-effect waves-light red"
          onClick={onClick}>
          <i class="material-icons">add</i>
        </button>
      </div>
      <form>
        <input 
          type="search" 
          class="col s6" 
          placeholder="Search by keyword..."
          id="searchText"
          onChange={() => onChange(document.getElementById("searchText").value)}>
        </input>
      </form>
    </header>
  );
}

export default Search;