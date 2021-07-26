import React from "react";

const Search = ({onChange}) => {
  return (
    <header class="row">
      <div class="col s3">
        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>
      <form>
        <input 
          type="text" 
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