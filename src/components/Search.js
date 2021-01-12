import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const serachChangeHandler = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section>
      <form className="searchBar">
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">textsms</i>
                <input
                  type="text"
                  id="autocomplete-input"
                  name="text"
                  className="autocomplete"
                  onChange={(e) => serachChangeHandler(e.target.value)}
                />
                <label htmlFor="autocomplete-input">Search by Names</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Search;
