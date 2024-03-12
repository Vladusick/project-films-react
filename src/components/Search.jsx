import React from "react";
import { useState } from "react";

function Search(props) {
  const {
    // Function.prototype - функция по умолчанию, если пропсы будут пустыми
    searchMovies = Function.prototype,
    moviesIsEmpty,
  } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const noValueMessge = "please enter value below";

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <div style={{ minHeight: "22px" }}>
          {moviesIsEmpty && search === "" && (
            <span style={{ color: "red" }}>{noValueMessge}</span>
          )}
        </div>
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          style={{ minHeight: "50px" }}
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
      </div>
      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
}

export { Search };
